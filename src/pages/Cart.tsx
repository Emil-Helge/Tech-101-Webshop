import { Button, Card, Container, Grid, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import CartProduct from '../components/CartProduct';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { mockedProducts } from '../data';

function Cart() {
  const { cartProducts } = useShoppingCart();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);

    // cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isSmallScreen) {
    return (
      <Container size="md">
        <Grid justify="center" align="flex-start">
          <Grid.Col span="auto">
            {cartProducts.map((product) => (
              <CartProduct key={product.id} {...product} />
            ))}
          </Grid.Col>
          <Grid.Col span="auto">
            <Card
              sx={{
                display: 'flex',
                gap: '1rem',
                flexDirection: 'column',
                justifyItems: 'center',
                alignItems: 'center',
              }}
            >
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
              <Button>Checkout</Button>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    );
  } else {
    return (
      <Container size="md">
        <Grid justify="center" align="flex-start">
          <Grid.Col span={11}>
            {cartProducts.map((product) => (
              <CartProduct key={product.id} {...product} />
            ))}
            {/* <Grid.Col span="auto"> */}
            <Card
              sx={{
                display: 'flex',
                gap: '1rem',
                flexDirection: 'column',
                justifyItems: 'center',
                alignItems: 'center',
              }}
            >
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
              <Button>Checkout</Button>
            </Card>
            {/* </Grid.Col> */}
          </Grid.Col>
        </Grid>
      </Container>
    );
  }
}

export default Cart;
