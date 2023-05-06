import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'; // aquí debes importar la vista inicial
import DetailsScreen from './Screens/DetailsScreen'; // aquí debes importar la vista de detalles
import Login from './Screens/Login';
import Registro from './Screens/Registro';
import MainScreen from './Screens/MainScreen';
import ListaGasto from './Screens/ListaGasto';
import ListaIngreso from './Screens/ListaIngreso';
import RegIngreso from './Screens/RegIngreso';
import ActuaIngreso from './Screens/ActuaIngreso';
import NewGasto from './Screens/NewGasto';
import ActuaGasto from './Screens/ActuaGasto';
import Coonsejos from './Screens/Coonsejos';
import Reports from './Screens/Reports';

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
        <Stack.Screen name="Principal" component={MainScreen} />
        <Stack.Screen name="ListGasto" component={ListaGasto} />
        <Stack.Screen name="ListIngreso" component={ListaIngreso} />
        <Stack.Screen name="ReIngreso" component={RegIngreso} />
        <Stack.Screen name="ActIngreso" component={ActuaIngreso}/>
        <Stack.Screen name="NewGasto" component={NewGasto}/>
        <Stack.Screen name="ActuaGasto" component={ActuaGasto}/>
        <Stack.Screen name="Consejos" component={Coonsejos}/>
        <Stack.Screen name="Reportes" component={Reports}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
