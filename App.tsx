import { ThemeProvider } from 'styled-components/native'

import theme from './src/theme';

import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans'

import { Routes } from './src/routes';

import { Loading } from './src/components/Loading';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
        </ThemeProvider>
    </SafeAreaProvider>
  );
}