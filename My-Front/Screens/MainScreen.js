import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, Button, TouchableOpacity, Image, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import BackDropDeta from '../Screens/BackDropDeta.js';
import axios from "axios";
import { Table, Row, Rows } from 'react-native-table-component';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function MainScreen({ navigation, route }) {

  const [modalVisible, setModalVisible] = useState(false);

  const { usuario } = route.params;
  const [disponible, setDisponible] = useState('');
  const [gasto, setGasto] = useState('');

  const [transporte, setTransporte] = useState(123123);
  const [comida, setComida] = useState(500000);
  const [gym, setGym] = useState(160000);
  const [salud, setSalud] = useState(890000);
  const [compras, setCompras] = useState(75000);

  //Quitar LOG
  console.log(usuario)

  const subMenu = (
    <View style={style.subMenuContainer}>
      <TouchableOpacity onPress={() => setModalVisible(false)}>
        <Text style={style.closeButton}>Cerrar submenú</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Principal", { usuario }, setModalVisible(false))}>
        <Text>Principal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Reportes", { usuario }, setModalVisible(false))}>
        <Text>Exporta Excel</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Consejos", { usuario }, setModalVisible(false))}>
        <Text>Consejos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(false)}>
        <Text style={style.closeButton}>Principal</Text>
      </TouchableOpacity>
    </View>
  );

  const tableDataButonUno = [
    [<TouchableOpacity onPress={() => navigation.navigate("NewGasto", { usuario })}>
      <Image style={style.imgStyle} source={require('../scr/imgs/menos.png')} resizeMethod="contain" />
    </TouchableOpacity>,
    <TouchableOpacity onPress={() => navigation.navigate("ReIngreso", { usuario })}>
      <Image style={style.imgStyle} source={require('../scr/imgs/mas.png')} resizeMethod="contain" />
    </TouchableOpacity>]
  ];

  const tableDataCateGasto = [
    [<Image style={style.imgStyle} source={require('../scr/imgs/transporte.png')} resizeMethod="contain" />,
    <Text style={style.rowText}>Transporte</Text>,
    <Text style={style.rowText}>{transporte.toLocaleString()}</Text>],
    [<Image style={style.imgStyle} source={require('../scr/imgs/comida.png')} resizeMethod="contain" />,
    <Text style={style.rowText}>Comida</Text>,
    <Text style={style.rowText}>{comida.toLocaleString()}</Text>],
    [<Image style={style.imgStyle} source={require('../scr/imgs/gym.png')} resizeMethod="contain" />,
    <Text style={style.rowText}>GYM</Text>,
    <Text style={style.rowText}>{gym.toLocaleString()}</Text>],
    [<Image style={style.imgStyle} source={require('../scr/imgs/salud.png')} resizeMethod="contain" />,
    <Text style={style.rowText}>Salud</Text>,
    <Text style={style.rowText}>{salud.toLocaleString()}</Text>],
    [<Image style={style.imgStyle} source={require('../scr/imgs/compras.png')} resizeMethod="contain" />,
    <Text style={style.rowText}>Compras</Text>,
    <Text style={style.rowText}>{compras.toLocaleString()}</Text>],
  ];

  useEffect(() => {

    const dispo = () => {
       
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
          <Feather name="menu" size={30} style={style.menu} onPress={() => setModalVisible(true)} />

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={style.modalBackground}>
              <View style={style.modalContainer}>
                {subMenu}
              </View>
              <TouchableOpacity style={{ flex: 1 }} onPress={() => setModalVisible(false)} />
            </View>
          </Modal>

          <Text style={style.textDis}>DISPONIBLE</Text>
          <Text style={style.textNum}>$ {disponible.toLocaleString()}</Text>
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
          <Text style={style.textGasto}>$ {gasto.toLocaleString()}</Text>
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
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tabla: {
    right: '4%'
  },
  openButton: {
    backgroundColor: '#f194ff',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  subMenuContainer: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#E2EEE8',
  },
  closeButton: {
    color: 'red',
  },
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 0,
  },
  modalContainer: {
    width: '50%',
    height: '50%',
    padding: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: '20%',
    backgroundColor: '#E2EEE8',
  },


})
