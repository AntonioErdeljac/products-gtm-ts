import React from 'react';
import { Title, Text, Container } from '@mantine/core';

import useStyles from './styles';

export function Hero() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          Lorem Ipsum{' '}
          <Text component="span" className={classes.highlight} inherit>
            Hero
          </Text>{' '}
          Text For The Product
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique tortor in odio
            facilisis, quis luctus magna commodo. In lobortis risus ex, vel condimentum lectus
            vehicula vel.
          </Text>
        </Container>
      </div>
    </Container>
  );
}

export default Hero;
