import React, { useCallback, useState } from 'react';
import { Container, Grid } from '@mantine/core';

import ContactForm from '../ContactForm';
import ProductItem from '../ProductItem';

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>('A');

  const onSelect = useCallback(
    (checked: boolean, value: string) => {
      if (selectedProduct === value) {
        setSelectedProduct(undefined);
      } else {
        setSelectedProduct(value);
      }
    },
    [selectedProduct],
  );

  return (
    <Container>
      <Grid columns={2}>
        <Grid.Col sm={1}>
          <ProductItem
            onChange={(checked) => onSelect(checked, 'A')}
            checked={selectedProduct === 'A'}
            value="A"
            title="Product A"
            description="Lorem Ipsum Product A"
          />
        </Grid.Col>
        <Grid.Col sm={1}>
          <ProductItem
            onChange={(checked) => onSelect(checked, 'B')}
            checked={selectedProduct === 'B'}
            value="B"
            title="Product B"
            description="Lorem Ipsum Product B"
          />
        </Grid.Col>
      </Grid>
      <Grid mt={20} columns={1}>
        <Grid.Col>
          <ContactForm selectedProduct={selectedProduct} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Products;
