import { Box, Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

export interface FormValues {
  fullName: string;
  email: string;
  adress: string;
  zipCode: string;
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
        /^\S+@\S+\.\S+$/.test(value) ? null : (
          <p data-cy="customer-email-error">Invalid email</p>
        ),
      fullName: (value) => {
        if (value.length < 1) {
          return (
            <span data-cy="customer-name-error">
              Is your name really this short? 😉
            </span>
          );
        }
        return null;
      },
      adress: (value) => {
        if (value.length < 1) {
          return (
            <span data-cy="customer-address-error">
              Please enter your adress
            </span>
          );
        }
        if (!/\d/.test(value)) {
          return (
            <span data-cy="customer-address-error">
              The address should contain at least one number
            </span>
          );
        }
        if (!/[a-zA-Z]/.test(value)) {
          return (
            <span data-cy="customer-address-error">
              The address should contain at least one letter
            </span>
          );
        }
        return null;
      },
      zipCode: (value) => {
        if (value.length !== 5) {
          return (
            <span data-cy="customer-zipcode-error">
              Please enter your entire zipCode
            </span>
          );
        }
        return null;
      },
      mobileNr: (value) => {
        if (value.length < 9) {
          return (
            <span data-cy="customer-phone-error">
              Please enter your entire phone nr
            </span>
          );
        }
        return null;
      },
      city: (value) => {
        if (value.length < 2) {
          return (
            <span data-cy="customer-city-error">Please enter your city</span>
          );
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
          errorProps={{ 'data-cy': '' }}
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
          autoComplete="street-address"
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
        <TextInput
          autoComplete="postal-code"
          // required
          withAsterisk
          type="number"
          label="Zip Code"
          placeholder="ex: 43152"
          {...form.getInputProps('zipCode')}
          data-cy="customer-zipcode"
        />
        <TextInput
          autoComplete="city"
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
