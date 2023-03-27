import { Box, Button, Group, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Product } from '../../data';
import generateID from '../utils/generateID';

interface ProductFormProps {
  onSubmit: (product: Product) => void;
  addProduct: (product: Product) => void;
  isEditing: boolean;
  product?: Product;
}

const schema = Yup.object().shape({
  image: Yup.string().url('Invalid URL').required('Image URL is required'),
  title: Yup.string()
    .min(2, 'Title should have at least 2 letters')
    .required('Title is required'),
  description: Yup.string()
    .min(5, 'Description should have at least 5 letters')
    .required('Description is required'),
  price: Yup.string()
    .min(3, 'Nothing is this cheap...')
    .required('Price is required'),
});

function ProductForm({
  onSubmit,
  addProduct,
  isEditing,
  product,
}: ProductFormProps) {
  const navigate = useNavigate();
  const form = useForm<Product>({
    validate: yupResolver(schema),
    initialValues: {
      id: '',
      image: '',
      title: '',
      description: '',
      price: 0,
      secondImage: '',
      summary: [],
      rating: 0,
      usersRated: 0,
    },
  });
  console.log('Form errors:', form.errors);
  useEffect(() => {
    if (isEditing && product) {
      form.setValues(product);
    }
  }, [product, isEditing, form.setValues]);

  const handleSubmit = (values: Product) => {
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
        onSubmit={form.onSubmit(handleSubmit)}
        data-cy="product-form"
        id="product-form"
      >
        <TextInput
          withAsterisk
          label="Title"
          {...form.getInputProps('title')}
          data-cy="product-title"
          errorProps={{ 'data-cy': 'product-title-error' }}
        />
        <TextInput
          withAsterisk
          label="Image URL"
          {...form.getInputProps('image')}
          data-cy="product-image"
          errorProps={{ 'data-cy': 'product-image-error' }}
        />
        <TextInput
          label="Second Image URL"
          {...form.getInputProps('secondImage')}
          errorProps={{ 'data-cy': 'product-image-error' }}
        />
        <TextInput
          withAsterisk
          label="Description"
          {...form.getInputProps('description')}
          data-cy="product-description"
          errorProps={{ 'data-cy': 'product-description-error' }}
        />
        <TextInput
          withAsterisk
          type="number"
          label="Price"
          {...form.getInputProps('price')}
          data-cy="product-price"
          errorProps={{ 'data-cy': 'product-price-error' }}
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
