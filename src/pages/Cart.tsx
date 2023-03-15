import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { products as mockedProducts } from '../../data/index';
import CartProduct from '../components/CartProduct';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

function Cart() {
  const theme = useMantineTheme();
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

            <Button>Checkout</Button>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Cart;

// test with emil comment
