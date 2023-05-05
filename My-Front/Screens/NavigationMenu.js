import React, { useState, useEffect } from 'react';
import { createDrawerNavigatior } from '@react-navigation/drawer';
import MainScreen from './MainScreen';
import RegIngreso from './RegIngreso';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigatior();

function NavigationMenu(){
    return(
        <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen  name = "Pantalla Princial" component = {MainScreen}/>
            <Drawer.Screen name ="Exportar Excel" component = {RegIngreso}/>
        </Drawer.Navigator>
        </NavigationContainer>
    )
}