import { Container, SimpleGrid } from '@mantine/core';
import ProductCard from '../components/ProductCard';
import { mockedProducts } from '../data';
import useLocalStorage from '../hooks/useLocalStorage';

function Admin() {
  const [products, setProducts] = useLocalStorage('Hej', mockedProducts);
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

export default Admin;
