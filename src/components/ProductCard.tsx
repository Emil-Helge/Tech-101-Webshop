import { Button, Card, Group, Image, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
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
  return (
    <>
      <Card shadow="xl" padding="md" radius="lg" withBorder>
        <Card.Section>
          <Image src={product.image} height={230} fit="cover" />
        </Card.Section>
        <Group position="center" mt="xl" mb="xl">
          <Text weight={500} size={29} transform="uppercase">
            {product.title}
          </Text>
        </Group>
        <Text size="sm" color="dimmed" align="center">
          {product.description}
        </Text>
        <Text weight={500} size="lg" color="dark" align="center">
          {product.price}€
        </Text>
        <Group position="center" mt="md" mb="xs">
          <Button variant="outline" mt="md" radius="md">
            Product Page
          </Button>
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
                title: 'Product added to cart',
                message: `${product.title}`,
              });
            }}
          >
            Add to cart
          </Button>
        </Group>
      </Card>
    </>
  );
}

export default ProductCard;
