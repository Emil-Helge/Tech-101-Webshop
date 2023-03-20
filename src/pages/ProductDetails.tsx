import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Product, products as mockedProducts } from '../../data/index';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const parseID = parseInt(id ?? '');
  const product: Product | undefined = mockedProducts.find(
    (product) => product.id == parseID
  );
  const {
    getProductQuantity,
    increaseCartQuantity,
    decreaseCartQuantity, // Not in use yet
    removeFromCart, // Not in use yet
  } = useShoppingCart();
  const goBack = () => {
    window.history.back();
  };
  const theme = useMantineTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <Container>
        <Link to="/">
          <Button variant="outline">Back</Button>
        </Link>
        <Title>Sorry! Product not found</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Button variant="outline" mt="sm" onClick={goBack}>
        Back
      </Button>
      <Flex direction={{ base: 'column', sm: 'row' }}>
        <Card mt="md">
          <Title align="center" mb={50} data-cy="product-title">
            {product.title}
          </Title>
          <Image src={product.image} alt={product.title} fit="contain" />
        </Card>
        <Card mt="md">
          <Box
            sx={{
              background: theme.colors.blue[7],
              color: theme.colors.gray[1],
              borderTopLeftRadius: '.5rem',
              borderBottomLeftRadius: '.5rem',
              padding: '.4rem',
            }}
          >
            <Title order={3} align="center">
              About this {product.title}
            </Title>
          </Box>
          <Text size="md" align="left" mt="md" data-cy="product-description">
            {product.description}
          </Text>
          <Group position="right">
            <Title order={2} data-cy="product-price">
              {product.price}€
            </Title>
          </Group>
          <Button
            fullWidth
            variant="light"
            mt="md"
            radius="md"
            onClick={() => {
              increaseCartQuantity(product.id);
              notifications.show({
                icon: (
                  <img
                    src="/assets/checked-icon.svg"
                    width="38px"
                    alt="checked icon"
                  />
                ),
                title: 'Product added to cart',
                message: `${product.title}`,
              });
            }}
            data-cy="product-buy-button"
          >
            Add to cart
          </Button>
          <Link to="/checkout" style={{ textDecoration: 'none' }}>
            <Button
              fullWidth
              variant="outline"
              mt="md"
              radius="md"
              onClick={() => increaseCartQuantity(product.id)}
              data-cy="product-buy-button"
            >
              Buy now
            </Button>
          </Link>
        </Card>
      </Flex>
    </Container>
  );
}

export default ProductDetails;
