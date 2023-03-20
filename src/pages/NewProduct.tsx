import { Container, Group, Title } from '@mantine/core';
import { useContext } from 'react';
import { Product } from '../../data';
import ProductForm from '../components/ProductForm';
import { ProductContext } from '../contexts/ProductContext';

interface ProductFormProps {
  onSubmit: (product: Product) => void;
  addProduct: (product: Product) => void;
}

function NewProduct() {
  const { products, deleteProduct, addProduct } = useContext(ProductContext);

  return (
    <Container>
      <Group position="center" mb="xl">
        <Title>New Product</Title>
      </Group>
      <ProductForm
        onSubmit={(product) => console.log(product)}
        addProduct={addProduct}
      />
    </Container>
  );
}

export default NewProduct;
