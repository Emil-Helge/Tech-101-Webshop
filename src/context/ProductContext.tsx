import { createContext, ReactNode, useState } from "react";
import { mockedProducts, Product } from "../data";

interface ContextValue {
  products: Product[];
}

export const ProductContext = createContext<ContextValue>(null as any);

interface Props {
  children: ReactNode;
}

function ProductProvider({ children }: Props) {
  const [products, setProducts] = useState(mockedProducts);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
