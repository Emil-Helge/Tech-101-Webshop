import { createContext, ReactNode } from 'react';
import { Product, products as mockedProducts } from '../../data/index';
import useLocalStorage from '../hooks/useLocalStorage';

interface ContextValue {
  products: Product[];
  deleteProduct: (id: number) => void;
}

export const ProductContext = createContext<ContextValue>(null as any);

interface Props {
  children: ReactNode;
}

function ProductProvider({ children }: Props) {
  const [products, setProducts] = useLocalStorage<Product[]>(
    'Products:',
    mockedProducts
  );

  function deleteProduct(id: number) {
    setProducts((currentProducts) => {
      return currentProducts.filter((product) => product.id !== id);
    });
  }

  return (
    <ProductContext.Provider value={{ products, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
