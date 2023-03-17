import {
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Text,
  Title,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../../data/index';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  const { increaseCartQuantity } = useShoppingCart();

  const goBack = () => {
    window.history.back();
  };

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
      <Button variant="outline" onClick={goBack}>
        Back
      </Button>
      <Flex direction={{ base: 'column', sm: 'row' }}>
        <Card>
          <Image src={product.image} alt={product.title} fit="contain" />
        </Card>
        <Card>
          <Title align="center" mb={50} data-cy="product-title">
            {product.title}
          </Title>
          <Title order={2} align="center">
            Description:
          </Title>
          <Text size="md" align="center" data-cy="product-description">
            {product.description}
          </Text>
          <Group position="center">
            <Title order={3} data-cy="product-price">
              {product.price}€
            </Title>
            <Button
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
                  title: `${product.title}`,
                  message: 'has been added',
                });
              }}
              data-cy="product-buy-button"
            >
              Add to cart
            </Button>
          </Group>
        </Card>
      </Flex>
    </Container>
  );
}

export default ProductDetails;
