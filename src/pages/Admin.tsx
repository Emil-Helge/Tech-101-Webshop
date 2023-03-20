import { Container, SimpleGrid, Title } from '@mantine/core';
import { useContext } from 'react';
import { Product } from '../../data';
import AdminProductCard from '../components/AdminProductCard';
import ProductForm from '../components/ProductForm';
import { ProductContext } from '../contexts/ProductContext';

interface ProductFormProps {
  onSubmit: (product: Product) => void;
  addProduct: (product: Product) => void;
}

function Admin() {
  const { products, deleteProduct, addProduct } = useContext(ProductContext);

  return (
    <Container size="xl">
      <Title
        sx={{ marginBottom: '1rem' }}
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
        ta="center"
      >
        Admin Panel - Product Management
      </Title>
      <ProductForm
        onSubmit={(product) => console.log(product)}
        addProduct={addProduct}
      />
      <SimpleGrid
        cols={3}
        spacing="xl"
        verticalSpacing="xl"
        breakpoints={[
          { maxWidth: '85rem', cols: 2, spacing: 'md' },
          { maxWidth: '36rem', cols: 1, spacing: 'sm' },
        ]}
      >
        {products.map((product) => (
          <AdminProductCard
            key={product.id}
            product={product}
            onDelete={() => deleteProduct(product.id)}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Admin;
