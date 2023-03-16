import { Button, Card, Group, Image, Input, Text } from '@mantine/core';
import { products as mockedProducts } from '../../data/index';
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
    <Card shadow="sm" mt="sm" padding="sm" radius="sm" data-cy="cart-item">
      <Card.Section>
        <Image src={product.image} height={190} fit="cover" />
      </Card.Section>
      <Group position="center" mt="sm" mb="sm">
        <Text
          weight={500}
          size={20}
          transform="uppercase"
          data-cy="product-title"
        >
          {product.title}
        </Text>
      </Group>
      <Group position="center" mt="xs" mb="xs" data-cy="product-quantity">
        {' '}
        <Button
          variant="light"
          mt="sm"
          radius="sm"
          onClick={() => decreaseCartQuantity(product.id)}
          data-cy="decrease-quantity-button"
        >
          -
        </Button>
        <Input
          mt="sm"
          readOnly
          variant="unstyled"
          type="number"
          value={quantity}
          rightSectionWidth="0px"
          sx={{
            width: '1.2rem',
          }}
        />
        <Button
          variant="light"
          mt="sm"
          radius="md"
          onClick={() => increaseCartQuantity(product.id)}
          data-cy="increase-quantity-button"
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
        <Text mt="sm" weight={500} size={15} data-cy="product-price">
          x{product.price * quantity}€
        </Text>
      </Group>
    </Card>
  );
}

export default CartProduct;
