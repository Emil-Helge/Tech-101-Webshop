import { Box, Button, Group, NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

export interface FormValues {
  fullName: string;
  email: string;
  adress: string;
  zipCode: number | '';
  mobileNr: string;
  city: string;
}
function CheckoutForm() {
  const { addOrder, cartProducts } = useShoppingCart();
  const onSubmit = (data: FormValues) => {
    addOrder(cartProducts, data);
  };
  const form = useForm<FormValues>({
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      fullName: (value) => {
        // if (value.length < 2) {
        //   return 'Is your name really this short? 😉';
        // }
        if (/\d/.test(value)) {
          return 'This input should not contain any numbers.';
        }
        return null;
      },
      adress: (value) => {
        if (value.length < 1) {
          return 'Please enter your adress';
        }
        if (!/\d/.test(value)) {
          return 'The address should contain at least one number';
        }
        if (!/[a-zA-Z]/.test(value)) {
          return 'The address should contain at least one letter';
        }
        return null;
      },
    },
    initialValues: {
      fullName: '',
      email: '',
      adress: '',
      zipCode: '',
      mobileNr: '',
      city: '',
    },
  });

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit(onSubmit)}>
        {/* <form onSubmit={form.onSubmit((values) => console.log(values))}> */}
        <TextInput
          autoComplete="name"
          required
          withAsterisk
          label="Full Name"
          placeholder="Firstname Lastname"
          {...form.getInputProps('fullName')}
        />
        <TextInput
          autoComplete="email"
          required
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          autoComplete="street-adress"
          type="tel"
          required
          withAsterisk
          label="Adress"
          placeholder="ex: Bigboiroad 31"
          {...form.getInputProps('adress')}
        />
        <TextInput
          autoComplete="tel"
          required
          type="number"
          withAsterisk
          label="Mobile nr"
          placeholder="ex: 0700415160"
          {...form.getInputProps('mobileNr')}
        />
        <NumberInput
          autoComplete="postal-code"
          required
          withAsterisk
          hideControls={true}
          label="Zip Code"
          placeholder="ex: 43152"
          {...form.getInputProps('zipCode')}
        />
        <TextInput
          autoComplete="adress-level2" // om detta inte funkar så ska det vara level1
          required
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
