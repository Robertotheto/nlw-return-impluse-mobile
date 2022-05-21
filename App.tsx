import 'react-native-gesture-handler';
import { useColorScheme, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Widget from './src/components/Widget';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { theme } from './src/theme';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const colorScheme = useColorScheme();
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();
  return (
    <ThemeProvider theme={colorScheme === 'dark' ? theme.dark : theme.light}>
      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent
      />
      <View
        style={{
          flex: 1,
          backgroundColor: colorScheme === 'dark' ? theme.dark.colors.background : theme.light.colors.background,
        }}
      >
        <Widget />
      </View>
    </ThemeProvider>
  );
}
