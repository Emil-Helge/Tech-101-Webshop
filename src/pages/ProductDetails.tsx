import { Button, Card, Flex, Group, Image, Text, Title } from '@mantine/core';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockedProducts, Product } from '../../data/index';
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div>
        <Button variant="outline" onClick={goBack}>
          Back
        </Button>
        <Title>Sorry! Product not found</Title>;
      </div>
    );
  }

  return (
    <div>
      <Button variant="outline" onClick={goBack}>
        Back
      </Button>
      <Title align="center" data-cy="product-title">
        {product.title}
      </Title>
      <Flex direction={{ base: 'column', sm: 'row' }}>
        <Card>
          <Image
            src={product.image}
            alt={product.title}
            height={230}
            fit="cover"
          />
        </Card>
        <Card>
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
              onClick={() => increaseCartQuantity(product.id)}
              data-cy="product-buy-button"
            >
              Add to cart
            </Button>
          </Group>
        </Card>
      </Flex>
    </div>
  );
}

export default ProductDetails;
