import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import PaginaPrincipal from '../Screens/PaginaPrincipal'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
     
    <NavigationContainer >
    <Stack.Navigator
      initialRouteName='pagina_principal'
    >


        <Stack.Screen 
           name="pagina_principal" 
           component={PaginaPrincipal} 
           options = {{ title: "MI ALIMENTACIÓN MIA" }}
        />

    </Stack.Navigator>

    </NavigationContainer>
  )
}