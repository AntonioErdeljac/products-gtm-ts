import React, { useCallback, useState } from 'react';
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  LoadingOverlay,
} from '@mantine/core';

import useStyles from './styles';
import { Conversions } from '../../utils';

type Props = {
  selectedProduct?: string;
};

export const ContactForm: React.FC<Props> = ({ selectedProduct }) => {
  const { classes } = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  const submit = useCallback(() => {
    if (!selectedProduct) {
      return;
    }

    Conversions.onProductSelection(selectedProduct);

    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, [selectedProduct]);

  return (
    <Paper style={{ position: 'relative' }}>
      <LoadingOverlay visible={isLoading} />
      <div className={classes.wrapper}>
        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <Text size="lg" weight={700} className={classes.title}>
            Notify me {selectedProduct ? ` about Product ${selectedProduct}` : ''}
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
              <TextInput disabled={!selectedProduct} label="Your name" placeholder="Your name" />
              <TextInput
                disabled={!selectedProduct}
                label="Your email"
                placeholder="Your email"
                required
              />
            </SimpleGrid>
            <Textarea
              disabled={!selectedProduct}
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group position="right" mt="md">
              <Button
                onClick={submit}
                disabled={!selectedProduct}
                type="submit"
                className={classes.control}
              >
                Send request
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
};

export default ContactForm;
