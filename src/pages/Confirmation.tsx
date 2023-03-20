import { CartItem } from '../../data';
import { FormValues } from '../components/CheckoutForm';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

interface Order {
  id: number;
  cartProducts: (CartItem | { formData: FormValues })[];
}

function Confirmation() {
  const { orders } = useShoppingCart();
  const lastOrder = orders[orders.length - 1];
  const formData = lastOrder.cartProducts.find(
    (item): item is { formData: FormValues } => 'formData' in item
  )?.formData;

  return (
    <div>
      <h1>Order Details</h1>
      {lastOrder && formData && (
        <>
          <h2>Customer Information</h2>
          <p>Name: {formData.fullName}</p>
          <p>Email: {formData.email}</p>
          <p>Address: {formData.adress}</p>
          <p>Zip Code: {formData.zipCode}</p>
          <p>Phone nr: {formData.mobileNr}</p>
          <p>City: {formData.city}</p>
          <h2>Ordered Products</h2>
          <ul>
            {lastOrder.cartProducts.map(
              (product, index) =>
                'id' in product && (
                  <li key={index}>
                    {product.title} - Quantity: {product.quantity}
                  </li>
                )
            )}
          </ul>
        </>
      )}
    </div>
  );
}

export default Confirmation;
