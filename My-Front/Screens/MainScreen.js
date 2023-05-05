import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import BackDropDeta from '../Screens/BackDropDeta.js';
import axios from "axios";
import { useIsFocused } from '@react-navigation/core';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

/**Manejar ingreso y saldo como botton*/
export default function MainScreen({ navigation, route }) {

  const { usuario } = route.params;
  const [disponible, setDisponible] = useState('');

  //Quitar LOG
  console.log(usuario)

  useEffect(() => {

    const dispo = () => {
      // Cambio de IPv4
      axios
        .get('https://backmovil-production.up.railway.app/operaciones/basicas/disponible/' + usuario + '')
        .then(res => {
          setDisponible(res.data);
        })
        .catch((err) => {
          console.log(err + ' ' + err.response.data.message);
          alert("Error " + err.response.data.message);
          throw err;
        });

    };

    dispo();
  }, []);

  return (
    <View style={style.container}>
      <BackDropDeta />
      <SafeAreaView>
        <View style={style.headerWrapper}>
          <Feather name="menu" size={30} style={style.menu} />
          <Text style={style.textDis}>DISPONIBLE</Text>
          <Text style={style.textNum}>$ {disponible}</Text>
        </View>
        <View style={style.headerWrapperThow}>
          <Button title='GASTO' color='#FFFFFF' onPress={() => navigation.navigate("ListGasto", { usuario })} />
        </View>
        <View style={style.headerWrapperThree}>
          <Button title='INGRESO' color='#FFFFFF' onPress={() => navigation.navigate("ListIngreso", { usuario })} />
        </View>
      </SafeAreaView>
      <SafeAreaView style={style.area1}>
        <Text>Hola</Text>
      </SafeAreaView>
      <SafeAreaView style={style.area2}>
        <Text>Hola</Text>
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
    right: '600%',
    top: '4%'
  }, area1: {
    backgroundColor: 'red'
  },
  area2: {
    backgroundColor: 'blue'
  }

})


