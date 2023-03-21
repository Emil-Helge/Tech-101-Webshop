import { Card, List, Text, useMantineTheme } from '@mantine/core';
import { CartItem, products } from '../../data';
import { FormValues } from '../components/CheckoutForm';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
interface Order {
  id: number;
  cartProducts: (CartItem | { formData: FormValues })[];
}

function Confirmation() {
  const theme = useMantineTheme();
  const { orders } = useShoppingCart();
  const lastOrder = orders[orders.length - 1];
  const formData = lastOrder.cartProducts.find(
    (item): item is { formData: FormValues } => 'formData' in item
  )?.formData;
  function calculateLastOrderTotal() {
    return lastOrder.cartProducts.reduce((total, item) => {
      if ('id' in item) {
        const product = products.find((i) => i.id === item.id);
        return total + (product?.price || 0) * item.quantity;
      }
      return total;
    }, 0);
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
        margin: '0 auto',
        width: '100%',
        textAlign: 'center',
      }}
    >
      {lastOrder && formData && (
        <>
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
              // maxWidth: '40rem',
              padding: '0 5rem',
            }}
          >
            <h1>Order Details</h1>
            <h2>Customer Information</h2>
            <Text>Name: {formData.fullName}</Text>
            <Text>Email: {formData.email}</Text>
            <Text>Address: {formData.adress}</Text>
            <Text>Zip Code: {formData.zipCode}</Text>
            <Text>Phone nr: {formData.mobileNr}</Text>
            <Text>City: {formData.city}</Text>
            <h2>Ordered Products</h2>
            <List listStyleType="none">
              {lastOrder.cartProducts.map(
                (product, index) =>
                  'id' in product && (
                    <List.Item key={index}>
                      {product.title} - Quantity: {product.quantity}
                    </List.Item>
                  )
              )}
            </List>
            <h2>Total price:{calculateLastOrderTotal()} €</h2>
          </Card>
        </>
      )}
    </div>
  );
}

export default Confirmation;
