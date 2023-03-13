import { Button, Card, Container, Grid, Text } from '@mantine/core';
import CartProduct from '../components/CartProduct';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { mockedProducts } from '../data';

function Cart() {
  const { cartProducts } = useShoppingCart();
  return (
    <Container size="md">
      <Grid justify="center" align="flex-start">
        <Grid.Col span={10} md={8} sm="auto">
          {cartProducts.map((product) => (
            <CartProduct key={product.id} {...product} />
          ))}
        </Grid.Col>
        <Grid.Col span={12} sm="auto">
          <Card
            sx={{
              display: 'flex',
              gap: '1rem',
              flexDirection: 'column',
              justifyItems: 'center',
              alignItems: 'center',
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
                  <>
                    <Text key={cartproduct.id}>{product?.title}</Text>
                    <Text weight={400}>
                      {cartproduct.quantity}x {product?.price}€
                    </Text>
                  </>
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

            <Button>Checkout</Button>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Cart;

// test with emil comment
