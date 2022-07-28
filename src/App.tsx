import React from 'react';
import { AppShell, MantineProvider } from '@mantine/core';

import { Hero, Navbar, Products } from './components';

function App() {
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
