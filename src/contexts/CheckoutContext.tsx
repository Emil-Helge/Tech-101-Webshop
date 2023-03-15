// import { createContext, ReactNode, useContext, useState } from 'react';
// import { useShoppingCart } from '../contexts/ShoppingCartContext';

// interface CheckoutProviderProps {
//   children: ReactNode;
// }

// interface CheckoutContext {}
// export const CheckoutContext = createContext<CheckoutContext>(null as any);

// export const useCheckout = () => useContext(CheckoutContext);

// export const CheckoutProvider: React.FC<CheckoutProviderProps> = ({
//   children,
// }) => {
//   const [orders, setOrders] = useState(0);
//   const { cartProducts } = useShoppingCart();

//   // setOrders((prevOrders) => [...prevOrders, newOrder]);

//   return (
//     <CheckoutContext.Provider value={{ orders }}>
//       {children}
//     </CheckoutContext.Provider>
//   );
// };

// export default CheckoutContext;

// ---------------------------------------------------------------------------------

// import { createContext, ReactNode, useContext, useState } from 'react';
// import { FormValues } from '../components/CheckoutForm';
// interface Order {
//   id: number;
//   cartProducts: any[]; // Replace 'any' with your cartProduct type
//   formData: FormValues; // Import FormValues from your CheckoutForm component
// }
// interface CheckoutProviderProps {
//   children: ReactNode;
// }

// const CheckoutContext = createContext<{
//   orders: Order[];
//   addOrder: (cartProducts: [], formData: FormValues) => void;
// }>({
//   orders: [],
//   addOrder: () => {},
// });

// export const useCheckout = () => useContext(CheckoutContext);

// export const CheckoutProvider: React.FC<CheckoutProviderProps> = ({
//   children,
// }) => {
//   const [orders, setOrders] = useState<Order[]>([]);

//   const addOrder = (cartProducts: any[], formData: FormValues) => {
//     // Replace 'any' with your cartProduct type
//     const newOrder: Order = {
//       id: orders.length,
//       cartProducts,
//       formData,
//     };

//     setOrders((prevOrders) => [...prevOrders, newOrder]);
//   };

//   return (
//     <CheckoutContext.Provider value={{ orders, addOrder }}>
//       {children}
//     </CheckoutContext.Provider>
//   );
// };

// export default CheckoutContext;
