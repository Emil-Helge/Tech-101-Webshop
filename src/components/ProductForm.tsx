import { Box, Button, Group, NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../data';
import generateID from '../utils/generateID';

interface ProductFormProps {
  onSubmit: (product: Product) => void;
  addProduct: (product: Product) => void;
  isEditing: boolean;
  product?: Product;
}

function ProductForm({
  onSubmit,
  addProduct,
  isEditing,
  product,
}: ProductFormProps) {
  const navigate = useNavigate();
  const form = useForm<Product>({
    initialValues: {
      id: '',
      image: '',
      title: '',
      description: '',
      price: 0,
    },
  });

  useEffect(() => {
    if (isEditing && product) {
      form.setValues(product);
    }
  }, [product]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const values = form.values;
    const editedProduct = { ...values, id: product?.id || '' };
    if (isEditing) {
      onSubmit(editedProduct);
    } else {
      addProduct({ ...editedProduct, id: generateID() });
    }
    form.reset();
    navigate('/admin');
  };

  return (
    <Box maw={300} mx="auto">
      <form
        onSubmit={(event) => handleSubmit(event)}
        data-cy="product-form"
        id="product-form"
      >
        <TextInput
          label="Title"
          required
          {...form.getInputProps('title')}
          data-cy="product-title"
        />
        <TextInput
          label="Image URL"
          required
          {...form.getInputProps('image')}
          data-cy="product-image"
        />
        <TextInput
          label="Description"
          required
          {...form.getInputProps('description')}
          data-cy="product-description"
        />
        <NumberInput
          hideControls
          label="Price"
          required
          {...form.getInputProps('price')}
          data-cy="product-price"
        />
        <Group mt="xl">
          <Button type="submit">
            {isEditing ? 'Save changes' : 'Add new Product'}
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export default ProductForm;
