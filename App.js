import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './app/components/home';
import { Screen2 } from './app/components/screen2';
import { NavigationContainer } from '@react-navigation/native';
import { Example } from './app/components/teste';

const Stack = createStackNavigator();

const App = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Exemplo" component={Example}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  

export default App;