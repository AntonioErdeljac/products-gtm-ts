import React from 'react';
import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid } from '@mantine/core';

import useStyles from './styles';

type Props = {
  selectedProduct?: string;
};

export const ContactForm: React.FC<Props> = ({ selectedProduct }) => {
  const { classes } = useStyles();

  return (
    <Paper>
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
              <Button disabled={!selectedProduct} type="submit" className={classes.control}>
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
