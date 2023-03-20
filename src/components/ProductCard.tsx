import { Button, Card, Group, Image, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/index';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const {
    getProductQuantity,
    increaseCartQuantity,
    decreaseCartQuantity, // Not in use yet
    removeFromCart, // Not in use yet
  } = useShoppingCart();
  const quantity = getProductQuantity(product.id);
  const link = '/product/' + product.id;
  return (
    <>
      <Card shadow="xl" padding="md" radius="lg" withBorder data-cy="product">
        <Card.Section>
          <Link to={link}>
            <Image src={product.image} height={230} fit="cover" />
          </Link>
        </Card.Section>
        <Group position="center" mt="xl" mb="xl">
          <Title order={2} data-cy="product-title">
            {product.title}
          </Title>
        </Group>
        {/* <Text size="sm" weight={500} align="center">
          {product.description}
        </Text> */}
        <Title order={3} align="center" data-cy="product-price">
          {product.price}€
        </Title>
        <Group position="center" mt="md" mb="xs">
          <Link to={link}>
            <Button variant="outline" mt="md" radius="md">
              Product Page
            </Button>
          </Link>
          <Button
            variant="light"
            mt="md"
            radius="md"
            onClick={() => {
              increaseCartQuantity(product.id);
              notifications.show({
                icon: <IconShoppingCartPlus />,
                title: 'Product added to cart',
                message: `${product.title}`,
              });
            }}
            data-cy="product-buy-button"
          >
            Add to cart
          </Button>
        </Group>
      </Card>
    </>
  );
}

export default ProductCard;
