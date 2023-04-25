import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './app/components/home';
import { Game1 } from './app/components/game1';
import { NavigationContainer } from '@react-navigation/native';
import { ButtonComponent } from './app/components/button';

const Stack = createStackNavigator();

const App = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Game1" component={Game1} />
        <Stack.Screen name="Exemplo" component={ButtonComponent}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  

export default App;