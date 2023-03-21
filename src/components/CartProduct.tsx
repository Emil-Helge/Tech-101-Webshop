import { Button, Card, Group, Image, Input, Text } from '@mantine/core';
import { useContext } from 'react';
import { CartItem } from '../../data/index';
import { ProductContext } from '../contexts/ProductContext';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

interface Props {
  cartItem: CartItem;
}

function CartProduct({ cartItem }: Props) {
  const { products } = useContext(ProductContext);
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  products.find((i) => i.id === cartItem.id);

  return (
    <Card shadow="sm" mt="sm" padding="sm" radius="sm" data-cy="cart-item">
      <Card.Section>
        <Image src={cartItem.image} height={190} fit="cover" />
      </Card.Section>
      <Group position="center" mt="sm" mb="sm">
        <Text
          weight={500}
          size={20}
          transform="uppercase"
          data-cy="product-title"
        >
          {cartItem.title}
        </Text>
      </Group>
      <Group position="center" mt="xs" mb="xs" data-cy="product-quantity">
        {' '}
        <Button
          variant="light"
          mt="sm"
          radius="sm"
          onClick={() => decreaseCartQuantity(cartItem.id)}
          data-cy="decrease-quantity-button"
        >
          -
        </Button>
        <Input
          mt="sm"
          readOnly
          variant="unstyled"
          type="number"
          value={cartItem.quantity}
          rightSectionWidth="0px"
          sx={{
            width: '1.2rem',
          }}
        />
        <Button
          variant="light"
          mt="sm"
          radius="md"
          onClick={() => increaseCartQuantity(cartItem.id)}
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
          onClick={() => removeFromCart(cartItem.id)}
        >
          Remove
        </Button>
      </Group>
      <Group position="center" mt="xs" mb="xs">
        <Text mt="sm" weight={500} size={15} data-cy="product-price">
          x{cartItem.price * cartItem.quantity}€
        </Text>
      </Group>
    </Card>
  );
}

export default CartProduct;
