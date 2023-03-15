import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useState } from 'react';
import { mockedProducts } from '../../data/index';
import CartProduct from '../components/CartProduct';
import CheckoutForm from '../components/CheckoutForm';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

function Cart() {
  const theme = useMantineTheme();
  const { cartProducts, orders } = useShoppingCart();
  const [showLastOrder, setShowLastOrder] = useState(false);
  const lastOrder = orders[orders.length - 1];

  function renderLastOrder() {
    if (orders.length === 0 || !showLastOrder) return null;

    const lastOrder = orders[orders.length - 1];

    return (
      <Card
        sx={{
          display: 'flex',
          gap: '1rem',
          flexDirection: 'column',
          justifyItems: 'center',
          alignItems: 'center',
          marginTop: '0.7rem',
          border: '0.15rem solid',
          borderColor: theme.colors.blue[0],
        }}
      >
        {/* <div>Last Order Details</div> */}
        <Title order={3}>Last Order Details</Title>
        {lastOrder.cartProducts.map((item) => {
          if ('id' in item) {
            const product = mockedProducts.find((i) => i.id === item.id);
            return (
              <div key={`product-${item.id}`}>
                {product?.title}, <b>x{item.quantity}</b>
              </div>
            );
          } else {
            return (
              <div key="form-data">
                <div>Full Name: {item.formData.fullName}</div>
                <div>Email: {item.formData.email}</div>
                <div>Address: {item.formData.adress}</div>
                <div>Zip Code: {item.formData.zipCode}</div>
                <div>Country: {item.formData.country}</div>
                <div>City: {item.formData.city}</div>
              </div>
            );
          }
        })}
      </Card>
    );
  }
  if (!showLastOrder) {
    return (
      <Container size="md">
        <Grid justify="center" align="flex-start">
          <Grid.Col span={10} md={8} sm="auto">
            {cartProducts.map((product) => (
              <CartProduct key={product.id} {...product} />
            ))}
            <CheckoutForm />
          </Grid.Col>
          <Grid.Col span={12} sm="auto">
            <Card
              sx={{
                display: 'flex',
                gap: '1rem',
                flexDirection: 'column',
                justifyItems: 'center',
                alignItems: 'center',
                marginTop: '0.7rem',
                border: '0.15rem solid',
                borderColor: theme.colors.blue[0],
              }}
            >
              <Text weight={600} size={25}>
                Summary:
              </Text>
              <Text weight={500} size={18}>
                {cartProducts.map((cartproduct) => {
                  const product = mockedProducts.find(
                    (i) => i.id === cartproduct.id
                  );
                  return (
                    <Box
                      key={cartproduct.id}
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '1rem',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Text>{product?.title}</Text>
                      <Text weight={400}>
                        {cartproduct.quantity}x {product?.price}€
                      </Text>
                    </Box>
                  );
                })}
              </Text>
              <Text weight={500} size={29}>
                total:{' '}
                {cartProducts.reduce((total, cartProduct) => {
                  const product = mockedProducts.find(
                    (i) => i.id === cartProduct.id
                  );
                  return total + (product?.price || 0) * cartProduct.quantity;
                }, 0)}
                €
              </Text>
              <Button> Checkout </Button>
              <button onClick={() => setShowLastOrder(!showLastOrder)}>
                hide
              </button>
              <button onClick={() => setShowLastOrder(!showLastOrder)}>
                show
              </button>
            </Card>
            {renderLastOrder()}
          </Grid.Col>
        </Grid>
      </Container>
    );
  } else {
    return <h1>NU SKÄMDE DU UT DIG!!</h1>;
  }
}

export default Cart;
