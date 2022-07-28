import React from 'react';

import { UnstyledButton, Checkbox, Text } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';

import useStyles from './styles';

interface ProductItemProps {
  checked?: boolean;
  defaultChecked?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?(checked: boolean): void;
  title: React.ReactNode;
  description: React.ReactNode;
}

export const ProductItem: React.FC<
  ProductItemProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof ProductItemProps>
> = ({ checked, defaultChecked, onChange, title, description, className, ...others }) => {
  const { classes, cx } = useStyles();

  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  return (
    <UnstyledButton
      {...others}
      onClick={() => handleChange(!value)}
      className={cx(classes.button, className)}
    >
      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        size="md"
        mr="xl"
        styles={{ input: { cursor: 'pointer' } }}
      />

      <div>
        <Text weight={500} mb={7} sx={{ lineHeight: 1 }}>
          {title}
        </Text>
        <Text size="sm" color="dimmed">
          {description}
        </Text>
      </div>
    </UnstyledButton>
  );
};

export default ProductItem;
