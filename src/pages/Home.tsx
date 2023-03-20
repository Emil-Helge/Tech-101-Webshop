import {
  Box,
  Container,
  MediaQuery,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useContext } from 'react';
import HeroSlide from '../components/HeroSlide';
import ProductCard from '../components/ProductCard';
import { ProductContext } from '../contexts/ProductContext';

function Home() {
  const theme = useMantineTheme();
  const { products } = useContext(ProductContext);
  return (
    <Container size="xl">
      <HeroSlide />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Title>Tech101</Title>
        <Text fz="xl" fw={500}>
          Providing up-to-date <br /> products and services
        </Text>
        <Text fz="lg" fs="italic">
          We. Tech. You
        </Text>
      </Box>
      <MediaQuery
        query="(max-width: 650px)"
        styles={{
          img: {
            width: '3.6rem',
            height: '3.6rem',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.blue[0],
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: '1.5rem',
            marginTop: '1rem',
            padding: '.3rem',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          <img src="./assets/recycable-parts.svg" alt="recycable parts icon" />
          <img
            src="./assets/sustainable-transports.svg"
            alt="sustainable transports icon"
          />
          <img src="./assets/free-deliveries.svg" alt="free deliveries icon" />
          <img src="./assets/price-guarantee.svg" alt="price guarantee icon" />
          <img src="./assets/free-returns.svg" alt="free returns icon" />
        </Box>
      </MediaQuery>
      <Title sx={{ marginBottom: '1rem' }} ta="center">
        Browse our collection
      </Title>
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
