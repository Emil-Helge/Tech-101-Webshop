import { Box, Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function ProductForm() {
  const form = useForm({
    initialValues: {
      id: '',
      image: '',
      title: '',
      description: '',
      price: 0,
    },
  });

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput label="Title" required {...form.getInputProps('title')} />
        <TextInput label="ID" required {...form.getInputProps('id')} />
        <TextInput
          label="Image URL"
          required
          {...form.getInputProps('image')}
        />
        <TextInput
          label="Description"
          required
          {...form.getInputProps('description')}
        />
        <TextInput
          type="number"
          label="Price"
          required
          {...form.getInputProps('price')}
        />
        <Group position="right">
          <Button type="submit">Add new Product</Button>
        </Group>
      </form>
    </Box>
  );
}

export default ProductForm;
