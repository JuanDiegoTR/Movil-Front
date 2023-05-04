import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import BackDropDeta from '../Screens/BackDropDeta.js';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

/**Manejar ingreso y saldo como botton*/
export default function MainScreen({ navigation, route }) {

  const { usuario } = route.params;

  //Quitar LOG
  console.log(usuario)

  return (
    <View style={style.container}>
      <BackDropDeta />
      <SafeAreaView>
        <View style={style.headerWrapper}>
          <Feather name="menu" size={30} style={style.menu} />
          <Text style={style.textDis}>DISPONIBLE</Text>
          <Text style={style.textNum}>$ 123.123</Text>
        </View>
        <View style={style.headerWrapperThow}>
          <Button title='GASTO' color='#FFFFFF' onPress={() => navigation.navigate("ListGasto", { usuario })} />
        </View>
        <View style={style.headerWrapperThree}>
          <Button title='INGRESO' color='#FFFFFF' onPress={() => navigation.navigate("ListIngreso", { usuario })} />
        </View>
        <View>
          <Button title='Direccion' onPress ={()=> navigation.navigate("RegGasto", {usuario})}/>
        </View>

      </SafeAreaView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1
  },
  headerWrapper: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  headerWrapperThow: {
    flexDirection: 'row',
    paddingLeft: '10%',
    top: '2%'
  },
  headerWrapperThree: {
    position: 'fixed',
    top: '-20%',
    right: '-28%'

  },
  menu: {
    color: '#FFFFFF',
    margin: 4
  },
  textDis: {
    color: '#FFFFFF',
    textAlign: 'center',
    top: -20,
    width: 310,
    fontWeight: 'bold',
    fontSize: 18
  },
  textNum: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    right:'600%',
    top: '4%'
  }

})


