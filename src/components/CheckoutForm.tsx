import { Box, Button, Group, NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

export interface FormValues {
  fullName: string;
  email: string;
  adress: string;
  zipCode: number | '';
  country: string;
  city: string;
}
function CheckoutForm() {
  const { addOrder, cartProducts } = useShoppingCart();
  const onSubmit = (data: FormValues) => {
    addOrder(cartProducts, data);
  };
  const form = useForm<FormValues>({
    initialValues: {
      fullName: '',
      email: '',
      adress: '',
      zipCode: '',
      country: '',
      city: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      fullName: (value) =>
        value.length < 2 ? 'Is your name really this short? 😉' : null,
    },
  });

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit(onSubmit)}>
        {/* <form onSubmit={form.onSubmit((values) => console.log(values))}> */}
        <TextInput
          withAsterisk
          label="Full Name"
          placeholder="Firstname Lastname"
          {...form.getInputProps('fullName')}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          withAsterisk
          label="Adress"
          placeholder="ex: Bigboiroad 31"
          {...form.getInputProps('adress')}
        />
        <TextInput
          withAsterisk
          label="Country"
          placeholder="ex: Sweden"
          {...form.getInputProps('country')}
        />
        <NumberInput
          withAsterisk
          hideControls={true}
          label="Zip Code"
          placeholder="ex: 43152"
          {...form.getInputProps('zipCode')}
        />
        <TextInput
          withAsterisk
          label="City"
          placeholder="ex: Gothenburg"
          {...form.getInputProps('city')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default CheckoutForm;
