import { Box, Button, Card, Container, Grid, Text } from '@mantine/core';
import { useMantineTheme } from '@mantine/styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products as mockedProducts } from '../../data/index';
import CartProduct from '../components/CartProduct';
import CheckoutForm from '../components/CheckoutForm';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

function Cart() {
  const theme = useMantineTheme();
  const { cartProducts, orders, cartQuantity } = useShoppingCart();
  const [showLastOrder, setShowLastOrder] = useState(false);
  const lastOrder = orders[orders.length - 1];

  function showOrderOnSubmit() {
    setShowLastOrder(true);
  }

  <Text weight={500} size={29}>
    total:{' '}
    {cartProducts.reduce((total, cartProduct) => {
      const product = mockedProducts.find((i) => i.id === cartProduct.id);
      return total + (product?.price || 0) * cartProduct.quantity;
    }, 0)}
    €
  </Text>;

  if (cartQuantity < 1) {
    return (
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
        size="xs"
      >
        <img
          src="./assets/sad-cart.svg"
          alt="a sad box indicating that the cart is empty"
        />
        <Text
          style={{ color: '#E92D37', fontWeight: '500', fontSize: '1.5rem' }}
        >
          Oops! Your cart is empty!
        </Text>
        <Text>Looks like you haven´t added anything to your cart yet</Text>
        <Link to="/">
          <Button variant="light" mt="md" radius="md" sx={{ maxWidth: '50%' }}>
            Shop Now
          </Button>
        </Link>
      </Container>
    );
  } else {
    return (
      <Container size="md">
        <Grid justify="center" align="flex-start">
          <Grid.Col span={10} md={8} sm="auto">
            {cartProducts.map((product) => (
              <CartProduct key={product.id} cartItem={product} />
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
              <Text data-cy="total-price" weight={500} size={29}>
                total:{' '}
                {cartProducts.reduce((total, cartProduct) => {
                  const product = mockedProducts.find(
                    (i) => i.id === cartProduct.id
                  );
                  return total + (product?.price || 0) * cartProduct.quantity;
                }, 0)}
                €
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    );
  }
}

export default Cart;
