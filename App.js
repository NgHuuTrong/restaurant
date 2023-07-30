import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { useFonts as useOsward, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useYesteryear, Yesteryear_400Regular } from '@expo-google-fonts/yesteryear';

import { useFonts as usePacifico, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

import { theme } from './src/infrastructure/theme';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { Navigation } from './src/infrastructure/navigation';
import { UsersContextProvider } from './src/services/users/user.context';

export default function App() {
  const [oswardLoaded] = useOsward({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  const [yesteryearLoaded] = useYesteryear({ Yesteryear_400Regular });
  const [pacificoLoaded] = usePacifico({ Pacifico_400Regular });

  if (!oswardLoaded || !latoLoaded || !yesteryearLoaded || !pacificoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <UsersContextProvider>
            <Navigation />
          </UsersContextProvider>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
