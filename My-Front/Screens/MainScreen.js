import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import BackDropDeta from '../Screens/BackDropDeta.js';
import axios from "axios";
import { Table, Row, Rows } from 'react-native-table-component';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

/**Manejar ingreso y saldo como botton*/
export default function MainScreen({ navigation, route }) {

  const { usuario } = route.params;
  const [disponible, setDisponible] = useState('');
  const [gasto, setGasto] = useState('');

  const [transporte, setTransporte] = useState('123.123');
  const [comida, setComida] = useState('500.000');
  const [gym, setGym] = useState('160.000');
  const [salud, setSalud] = useState('890.000');
  const [compras, setCompras] = useState('75.000');

  //Quitar LOG
  console.log(usuario)

  const tableDataButonUno = [
    [<TouchableOpacity>
      <Image style={style.imgStyle} source={require('../scr/imgs/menos.png')} resizeMethod="contain" />
    </TouchableOpacity>,
    <TouchableOpacity onPress={() => navigation.navigate("ReIngreso", { usuario })}>
      <Image style={style.imgStyle} source={require('../scr/imgs/mas.png')} resizeMethod="contain" />
    </TouchableOpacity>]
  ];

  const tableDataCateGasto = [
    [<Image style={style.imgStyle} source={require('../scr/imgs/transporte.png')} resizeMethod="contain" />,
    <Text style={style.rowText}>Transporte</Text>,
    <Text style={style.rowText}>{transporte}</Text>],
    [<Image style={style.imgStyle} source={require('../scr/imgs/comida.png')} resizeMethod="contain" />,
    <Text style={style.rowText}>Comida</Text>,
    <Text style={style.rowText}>{comida}</Text>],
    [<Image style={style.imgStyle} source={require('../scr/imgs/gym.png')} resizeMethod="contain" />,
    <Text style={style.rowText}>GYM</Text>,
    <Text style={style.rowText}>{gym}</Text>],
    [<Image style={style.imgStyle} source={require('../scr/imgs/salud.png')} resizeMethod="contain" />,
    <Text style={style.rowText}>Salud</Text>,
    <Text style={style.rowText}>{salud}</Text>],
    [<Image style={style.imgStyle} source={require('../scr/imgs/compras.png')} resizeMethod="contain" />,
    <Text style={style.rowText}>Compras</Text>,
    <Text style={style.rowText}>{compras}</Text>],
  ];

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

    const gasto = () => {
      // Cambio de IPv4
      axios
        .get('https://backmovil-production.up.railway.app/operaciones/basicas/gasto/total/' + usuario + '')
        .then(res => {
          setGasto(res.data);
        })
        .catch((err) => {
          console.log(err + ' ' + err.response.data.message);
          alert("Error " + err.response.data.message);
          throw err;
        });

    };

    gasto();
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
      <View style={style.containerForm}>
        <SafeAreaView>
          <Text style={style.textGasto}>$ {gasto}</Text>
          <Table>
            <Rows data={tableDataButonUno} />
          </Table>
        </SafeAreaView>
      </View>
      <SafeAreaView style={style.area2}>
        <View>
          <Table style={style.tabla}>
            <Rows data={tableDataCateGasto} />
          </Table>
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
    right: '600%',
    top: '4%'
  }, area1: {
    backgroundColor: 'red'
  },
  area2: {
    maxHeight: '45%',
    flex: 1,
    backgroundColor: '#E2EEE8',
    margin: 20,
    padding: -20,
    borderRadius: 40
  },
  imgStyle: {
    margin: 20,
    left: '18%',
    marginTop: '12%'
  },
  containerForm: {
    marginTop: '-5%',
    maxHeight: '22%',
    flex: 1,
    backgroundColor: '#E2EEE8',
    margin: 20,
    padding: 20,
    borderRadius: 40
  },
  textGasto: {
    color: '#DF0ED3',
    textAlign: 'center',
    top: -14,
    fontWeight: 'bold',
    fontSize: 25
  },
  rowText: {
    textAlign:'center',
    fontWeight:'bold',
  },
  tabla:{
    right:'4%'
  }

})


