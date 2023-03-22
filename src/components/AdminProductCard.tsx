import { Button, Card, Group, Image, Text, Title } from '@mantine/core';
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

  const edit = '/admin/product/' + product.id + '/edit';

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
        <Group position="left" mt="xl" mb="xl">
          <Text
            weight={500}
            size={29}
            transform="uppercase"
            data-cy="product-title"
          >
            {product.title}
          </Text>
        </Group>
        <Group position="left" mt="xl" mb="xl">
          <Text>Product id:</Text>
          <Text data-cy="product-id">{product.id}</Text>
        </Group>
        <Text size="md" color="dimmed" align="left">
          {product.description}
        </Text>
        <Group position="left" mt="md" mb="xs">
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
          <Title
            order={2}
            sx={{ marginLeft: '1rem', marginTop: '.5rem' }}
            align="right"
            data-cy="product-price"
          >
            {product.price}€
          </Title>
        </Group>
      </Card>
    </>
  );
}

export default AdminProductCard;
