import { Box, Button, Group, NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router';
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
  const navigate = useNavigate();
  const { addOrder, cartProducts } = useShoppingCart();
  const onSubmit = (data: FormValues) => {
    addOrder(cartProducts, data);
    navigate('/confirmation');
  };
  const form = useForm<FormValues>({
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : (
          <p data-cy="product-description-error">Invalid email</p>
        ),

      fullName: (value) => {
        // if (value.length < 2) {
        //   return 'Is your name really this short? 😉';
        // }
        if (value.length < 1) {
          // if (/\d/.test(value)) {
          return (
            <span data-cy="customer-name-error">
              TOO SHORT MISTAH!!
              {/* This input should not contain any numbers. */}
            </span>
          );
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
      <form onSubmit={form.onSubmit(onSubmit)} data-cy="customer-form">
        {/* <form onSubmit={form.onSubmit((values) => console.log(values))}> */}
        <TextInput
          autoComplete="name"
          // required
          withAsterisk
          label="Full Name"
          placeholder="Firstname Lastname"
          {...form.getInputProps('fullName')}
          data-cy="customer-name"
        />
        <TextInput
          autoComplete="email"
          // required
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
          data-cy="customer-email"
        />
        <TextInput
          autoComplete="street-adress"
          type="tel"
          // required
          withAsterisk
          label="Adress"
          placeholder="ex: Bigboiroad 31"
          {...form.getInputProps('adress')}
          data-cy="customer-address"
        />
        <TextInput
          autoComplete="tel"
          // required
          type="number"
          withAsterisk
          label="Mobile nr"
          placeholder="ex: 0700415160"
          {...form.getInputProps('mobileNr')}
          data-cy="customer-phone"
        />
        <NumberInput
          autoComplete="postal-code"
          // required
          withAsterisk
          hideControls={true}
          label="Zip Code"
          placeholder="ex: 43152"
          {...form.getInputProps('zipCode')}
          data-cy="customer-zipcode"
        />
        <TextInput
          autoComplete="adress-level2" // om detta inte funkar så ska det vara level1
          // required
          withAsterisk
          label="City"
          placeholder="ex: Gothenburg"
          {...form.getInputProps('city')}
          data-cy="customer-city"
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default CheckoutForm;
