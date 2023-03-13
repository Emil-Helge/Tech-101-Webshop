import { createContext, ReactNode, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface CartProduct {
  id: number;
  quantity: number;
}

interface ShoppingCartContext {
  getProductQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartProducts: CartProduct[];
  cartQuantity: number;
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export const ShoppingCartContext = createContext<ShoppingCartContext>(
  null as any
);

interface Props {
  children: ReactNode;
}

function ShoppingCartProvider({ children }: Props) {
  const [cartProducts, setCartProducts] = useLocalStorage<CartProduct[]>(
    "Shopping cart:",
    []
  );

  const cartQuantity = cartProducts.reduce(
    (quantity, product) => product.quantity + quantity,
    0
  );

  function getProductQuantity(id: number) {
    return cartProducts.find((product) => product.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartProducts((currentProducts) => {
      if (currentProducts.find((product) => product.id === id) == null) {
        return [...currentProducts, { id, quantity: 1 }];
      } else {
        return currentProducts.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartProducts((currentProducts) => {
      if (
        currentProducts.find((product) => product.id === id)?.quantity === 1
      ) {
        return currentProducts.filter((product) => product.id !== id);
      } else {
        return currentProducts.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartProducts((currentProducts) => {
      return currentProducts.filter((product) => product.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getProductQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartProducts,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
