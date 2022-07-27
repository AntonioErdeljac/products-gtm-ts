import React from 'react';
import { AppShell, MantineProvider, Text } from '@mantine/core';

import { Navbar } from './components';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        header={
          <Navbar
            links={[
              { label: 'Home', link: '#home' },
              { label: 'Products', link: '#products' },
            ]}
          />
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        <Text>Hello products-gtm-t</Text>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
