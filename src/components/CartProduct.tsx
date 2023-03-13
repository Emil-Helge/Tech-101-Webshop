import { Button, Card, Group, Image, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { mockedProducts } from '../data';

interface CartProductProps {
  id: number;
  quantity: number;
}

function CartProduct({ id, quantity }: CartProductProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const product = mockedProducts.find((i) => i.id === id);
  if (product == null) return null;
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);

    // cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (!isSmallScreen) {
    return (
      <Card shadow="sm" mt="sm" padding="sm" radius="sm">
        <Card.Section>
          <Image src={product.image} height={120} fit="cover" />
        </Card.Section>
        <Group position="center" mt="sm" mb="sm">
          <Text weight={500} size={20} transform="uppercase">
            {product.title}
          </Text>
        </Group>
        <Group position="center" mt="xs" mb="xs">
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
          <Button
            variant="light"
            mt="sm"
            radius="md"
            onClick={() => removeFromCart(product.id)}
          >
            Remove
          </Button>
          <Text mt="sm" weight={500} size={15}>
            x{product.price * quantity}€
          </Text>
        </Group>
      </Card>
    );
  } else {
    return (
      <Card shadow="sm" mt="sm" padding="sm" radius="sm">
        <Card.Section>
          <Image src={product.image} height={120} fit="cover" />
        </Card.Section>
        <Group position="center" mt="sm" mb="sm">
          <Text weight={500} size={20} transform="uppercase">
            {product.title}
          </Text>
        </Group>
        <Group position="center" mt="xs" mb="xs">
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
          <Button
            variant="light"
            mt="sm"
            radius="md"
            onClick={() => removeFromCart(product.id)}
          >
            Remove
          </Button>
          <Text mt="sm" weight={500} size={15}>
            x{product.price * quantity}€
          </Text>
        </Group>
      </Card>
    );
  }
}

export default CartProduct;
