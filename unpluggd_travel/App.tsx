import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Initial from './src/navigator/Initial';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Initial />
    </NavigationContainer>
  );
}
