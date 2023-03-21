import { Container, Group, Title } from '@mantine/core';
import { useContext } from 'react';
import ProductForm from '../components/ProductForm';
import { ProductContext } from '../contexts/ProductContext';

function EditProduct() {
  const { addProduct } = useContext(ProductContext);

  return (
    <Container>
      <Group position="center" mb="xl">
        <Title>Edit Product</Title>
      </Group>
      <ProductForm
        onSubmit={(product) => console.log(product)}
        addProduct={addProduct}
      />
    </Container>
  );
}

export default EditProduct;
