import { createContext, ReactNode } from 'react';
import { Product, products as mockedProducts } from '../../data/index';
import useLocalStorage from '../hooks/useLocalStorage';

interface ContextValue {
  products: Product[];
  deleteProduct: (id: string) => void;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
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

  function deleteProduct(id: string) {
    setProducts((currentProducts) => {
      return currentProducts.filter((product) => product.id !== id);
    });
  }

  function addProduct(product: Product) {
    setProducts((currentProducts) => [...currentProducts, product]);
  }

  function updateProduct(id: string, updates: Partial<Product>) {
    setProducts((currentProducts) => {
      const index = currentProducts.findIndex((product) => product.id === id);
      if (index === -1) return currentProducts;

      const updatedProduct = { ...currentProducts[index], ...updates };
      const newProducts = [...currentProducts];
      newProducts[index] = updatedProduct;
      return newProducts;
    });
  }

  return (
    <ProductContext.Provider
      value={{ products, deleteProduct, addProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
