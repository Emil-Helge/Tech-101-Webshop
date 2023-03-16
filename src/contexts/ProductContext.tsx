import { createContext, ReactNode } from 'react';
import { Product, products as mockedProducts } from '../../data/index';
import useLocalStorage from '../hooks/useLocalStorage';

interface ContextValue {
  products: Product[];
}

export const ProductContext = createContext<ContextValue>(null as any);

interface Props {
  children: ReactNode;
}

function ProductProvider({ children }: Props) {
  const [products, setProducts] = useLocalStorage<Product[]>(
    'products',
    mockedProducts
  );

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
