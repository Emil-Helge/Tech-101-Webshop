import { Badge, Button, Card, Group, Image, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/index';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

export interface Props {
  product: Product;
  sortDirection: 'lowest' | 'highest';
  sortedProducts: Product[];
}

function ProductCard({ product, sortDirection, sortedProducts }: Props) {
  const {
    getProductQuantity,
    increaseCartQuantity,
    decreaseCartQuantity, // Not in use yet
    removeFromCart, // Not in use yet
  } = useShoppingCart();
  const quantity = getProductQuantity(product.id);
  const link = '/product/' + product.id;

  const price =
    sortDirection === 'lowest'
      ? sortedProducts[0].price
      : sortedProducts[sortedProducts.length - 1].price;

  return (
    <>
      <Card shadow="xl" padding="md" radius="lg" withBorder data-cy="product">
        <Card.Section>
          <Link to={link}>
            <Image src={product.image} height={230} fit="cover" />
          </Link>
        </Card.Section>
        <Group
          mt="xl"
          mb="xl"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Title order={2} data-cy="product-title">
            {product.title}
          </Title>
          <Badge color="blue" variant="light" size="lg">
            New!
          </Badge>
        </Group>
        {Array.isArray(product.summary) &&
          product.summary.map((item) => <li key={item}>{item}</li>)}
        <Group position="left" mt="md" mb="xs">
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
                title: `${product.title}`,
                message: 'has been added',
              });
            }}
            data-cy="product-buy-button"
          >
            Add to cart
          </Button>
          <Title
            style={{ marginLeft: 'auto', marginTop: '.5rem' }}
            order={2}
            align="left"
            data-cy="product-price"
          >
            {product.price}€
          </Title>
        </Group>
      </Card>
    </>
  );
}

export default ProductCard;
