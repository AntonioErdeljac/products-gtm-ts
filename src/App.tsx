import React, { useEffect } from 'react';
import { AppShell, MantineProvider } from '@mantine/core';

import { Hero, Navbar, Products } from './components';
import { Conversions } from './utils';

function App() {
  useEffect(() => {
    Conversions.init();
  }, []);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        header={<Navbar links={[{ label: 'Products', link: '#products' }]} />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white,
          },
        })}
      >
        <Hero />
        <Products />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
