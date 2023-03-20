import { Button, Card, Group, Image, Text } from '@mantine/core';
import { Product } from '../../data/index';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

interface Props {
  product: Product;
  onDelete?: () => void;
}

function AdminProductCard({ product, onDelete }: Props) {
  const {
    getProductQuantity,
    increaseCartQuantity,
    decreaseCartQuantity, // Not in use yet
    removeFromCart, // Not in use yet
  } = useShoppingCart();
  const quantity = getProductQuantity(product.id);
  return (
    <>
      <Card shadow="xl" padding="md" radius="lg" withBorder data-cy="product">
        <Card.Section>
          <Image src={product.image} height={230} fit="cover" />
        </Card.Section>
        <Group position="center" mt="xl" mb="xl">
          <Text
            weight={500}
            size={29}
            transform="uppercase"
            data-cy="product-title"
          >
            {product.title}
          </Text>
        </Group>
        <Group position="center" mt="xl" mb="xl">
          <Text>id:</Text>
          <Text data-cy="product-id">{product.id}</Text>
        </Group>
        <Text size="sm" color="dimmed" align="center">
          {product.description}
        </Text>
        <Text
          weight={500}
          size="lg"
          color="dark"
          align="center"
          data-cy="product-price"
        >
          {product.price}€
        </Text>
        <Group position="center" mt="md" mb="xs">
          <Button
            sx={{ color: 'red', borderColor: 'red' }}
            variant="outline"
            mt="md"
            radius="md"
            onClick={onDelete}
            data-cy="admin-remove-product"
          >
            Delete Product
          </Button>
          <Button
            variant="light"
            mt="md"
            radius="md"
            onClick={() => increaseCartQuantity(product.id)}
          >
            Add to cart
          </Button>
        </Group>
      </Card>
    </>
  );
}

export default AdminProductCard;
