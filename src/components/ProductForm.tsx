import { Box, TextInput } from '@mantine/core';
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
        <TextInput label="Title" required value={form.values.title} />
        <TextInput label="ID" required value={form.values.id} />
        <TextInput label="Image URL" required value={form.values.image} />
        <TextInput
          label="Description"
          required
          value={form.values.description}
        />
        <TextInput
          type="number"
          label="Price"
          required
          value={form.values.image}
        />
      </form>
    </Box>
  );
}

export default ProductForm;
