import { Button, Card, Group, Image, Text } from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const edit = '/admin/product/' + product.id;

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleDelete = () => {
    if (showConfirmDelete) {
      onDelete?.();
    } else {
      setShowConfirmDelete(true);
    }
  };

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
          {showConfirmDelete ? (
            <Button
              sx={{ color: 'red', borderColor: 'red' }}
              variant="outline"
              mt="md"
              radius="md"
              onClick={handleDelete}
              data-cy="confirm-delete-button"
            >
              Are you sure?
            </Button>
          ) : (
            <Button
              sx={{ color: 'red', borderColor: 'red' }}
              variant="outline"
              mt="md"
              radius="md"
              onClick={handleDelete}
              data-cy="admin-remove-product"
            >
              Delete Product
            </Button>
          )}

          <Link to={edit} data-cy="admin-edit-product">
            <Button variant="outline" mt="md" radius="md">
              Edit product
            </Button>
          </Link>
        </Group>
      </Card>
    </>
  );
}

export default AdminProductCard;
