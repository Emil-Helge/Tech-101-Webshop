import { Box, Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Product } from '../../data';

interface ProductFormProps {
  onSubmit: (product: Product) => void;
  addProduct: (product: Product) => void;
}

function ProductForm({ onSubmit, addProduct }: ProductFormProps) {
  const form = useForm<Product>({
    initialValues: {
      id: '',
      image: '',
      title: '',
      description: '',
      price: 0,
    },
  });

  const handleSubmit = () => {
    const values = form.getTransformedValues();
    onSubmit(values);
    form.reset();
    addProduct(values);
  };

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={handleSubmit} data-cy="product-form">
        <TextInput
          label="Title"
          required
          {...form.getInputProps('title')}
          data-cy="product-title"
        />
        <TextInput
          label="ID"
          required
          {...form.getInputProps('id')}
          data-cy="product-id"
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
        <TextInput
          type="number"
          label="Price"
          required
          {...form.getInputProps('price')}
          data-cy="product-price"
        />
        <Group mt="xl">
          <Button type="submit">Add new Product</Button>
        </Group>
      </form>
    </Box>
  );
}

export default ProductForm;
