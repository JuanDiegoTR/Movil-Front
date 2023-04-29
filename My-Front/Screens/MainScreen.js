import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import BackDropDeta from '../Screens/BackDropDeta.js';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

/**Manejar ingreso y saldo como botton*/
export default function MainScreen() {

  return (
    <View style={style.container}>
      <BackDropDeta />
      <SafeAreaView>
        <View style={style.headerWrapper}>
          <Feather name="menu" size={30} style={style.menu} />
          <Text style={style.textDis}>DISPONIBLE</Text>
        </View>
        <View style={style.headerWrapperThow}>
          <Text style={style.textSal}>SALDO</Text>
          </View>
        <View style={style.headerWrapperThree}>
        <Text style={style.textIng}>INGRESO</Text>
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
    paddingLeft: 30,
  },
  headerWrapperThree:{
    flexDirection: 'row-reverse',
    paddingLeft: 30,
  },
  menu: {
    color: '#FFFFFF',
    margin: 4
  },
  textDis: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: 1,
    width: 310,
    fontWeight: 'bold'
  },
  textSal: {
    color: '#FFFFFF',
    textAlign: 'left',
    fontWeight: 'bold',
    paddingTop: 25
  },
  textIng: {
    color: '#FFFFFF',
    textAlign: 'right',
    fontWeight: 'bold',
    marginTop:-20
  }

})


