import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'; // aquí debes importar la vista inicial
import DetailsScreen from './Screens/DetailsScreen'; // aquí debes importar la vista de detalles
import Login from './Screens/Login';
import Registro from './Screens/Registro';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Logueo" component={Login} />
        <Stack.Screen name="Registrarse" component={Registro} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
