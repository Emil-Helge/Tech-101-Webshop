import { Container, SimpleGrid } from '@mantine/core';
import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { ProductContext } from '../context/ProductContext';

function Home() {
  const { products } = useContext(ProductContext);
  return (
    <Container size="xl">
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
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Home;
