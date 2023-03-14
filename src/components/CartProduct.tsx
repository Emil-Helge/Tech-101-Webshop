import { Button, Card, Group, Image, Text } from '@mantine/core';
import { mockedProducts } from '../../data/index';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

interface CartProductProps {
  id: number;
  quantity: number;
}

function CartProduct({ id, quantity }: CartProductProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const product = mockedProducts.find((i) => i.id === id);
  if (product == null) return null;

  return (
    <Card shadow="sm" mt="sm" padding="sm" radius="sm">
      <Card.Section>
        <Image src={product.image} height={190} fit="cover" />
      </Card.Section>
      <Group position="center" mt="sm" mb="sm">
        <Text weight={500} size={20} transform="uppercase">
          {product.title}
        </Text>
      </Group>
      <Group position="center" mt="xs" mb="xs">
        {' '}
        <Button
          variant="light"
          mt="sm"
          radius="sm"
          onClick={() => decreaseCartQuantity(product.id)}
        >
          -
        </Button>
        <Text mt="sm" weight={300} size={15}>
          x{quantity}
        </Text>
        <Button
          variant="light"
          mt="sm"
          radius="md"
          onClick={() => increaseCartQuantity(product.id)}
        >
          +
        </Button>
      </Group>
      <Group position="center" mt="xs" mb="xs">
        <Button
          variant="light"
          mt="sm"
          radius="md"
          onClick={() => removeFromCart(product.id)}
        >
          Remove
        </Button>
      </Group>
      <Group position="center" mt="xs" mb="xs">
        <Text mt="sm" weight={500} size={15}>
          x{product.price * quantity}€
        </Text>
      </Group>
    </Card>
  );
}

export default CartProduct;
