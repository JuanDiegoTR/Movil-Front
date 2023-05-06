import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';
import BackDropFinal from '../Screens/BackDropFinal.js';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from 'react-native-gesture-handler';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Reports({ navigation, route }) {

    //const {usuario} = route.param;

    const [listIngre, setListIngre] = useState(["INGRESO", "GASTO", "AMBOS"]);
    const [idDescripcion, setIdDescripcion] = useState('');//YA

    const handleValueChange = (value) => {
        setIdDescripcion(value);
    };

    const tableData = [
        [<TextInput style={style.input} value='01/05/23' />,
        <TextInput style={style.input} value='05/05/23' />]
    ];

    return (
        <View style={style.container}>
            <BackDropFinal />
            <Text style={style.titlePrimary}>REPORTES</Text>
            <Image style={style.imgStyle} source={require('../scr/imgs/LOGO.png')} />
            <SafeAreaView>
                <View>
                    <Text style={style.fechaInico}>Fecha Inicio</Text>
                </View>
                <View>
                    <Text style={style.fechaFin}>Fecha Fin</Text>
                </View>
                <Table style={style.table}>
                    <Rows data={tableData} />
                </Table>
                <View>
                    <Text style={style.select}>Seleccione el tipo</Text>
                    <View style={style.selec}>
                        <RNPickerSelect
                            placeholder={{ label: 'SELECCIONE', value: null }}
                            onValueChange={handleValueChange}
                            items={listIngre.map((list) => ({ label: list }))}
                            value={idDescripcion}
                            textStyle={style.selecText}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        borderWidth: 0,
        borderColor: '#ccc',
    },
    titlePrimary: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 15,
        padding: 30,
    },
    imgStyle: {
        width: "70%",
        height: "33%",
        marginTop: 30,
        borderRadius: 100,
        margin: "15%"
    },
    fechaInico: {
        fontWeight: 'bold',
        marginLeft: '10%',
        color: '#969494'
    },
    fechaFin: {
        fontWeight: 'bold',
        marginLeft: '70%',
        color: '#969494',
        marginTop: '-4%'
    },
    select: {
        marginTop: '20%',
        marginLeft: '10%',
        color: '#000000',
        fontWeight: 'bold',
        marginLeft: '32%'
    },
    selecText: {
        color: 'black',
    },
    selec: {
        flexDirection: 'row',
        top: '-7%',
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        color: 'black',
        margin: '10%'
    },
    input: {
        height: '10%',
        marginVertical: 1,
        padding: 8,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 5,
        fontSize: 18,
        borderColor: 'rgb(226, 223, 223)',
        borderBottomColor: 'rgb(194, 191, 191)',
        backgroundColor: 'rgb(226, 223, 223)'
    },
    table: {
        top: '10%',
        width: '70%',
        marginLeft: '15%'
    },
    input: {
        height: '10%',
        padding: 8,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 5,
        fontSize: 18,
        borderColor: 'rgb(226, 223, 223)',
        borderBottomColor: 'rgb(194, 191, 191)',
        backgroundColor: 'rgb(226, 223, 223)'
    },
    button2: {
        width: '45%',
        height: '10%',
        marginTop: '25%',
        justifyContent: 'center',
        backgroundColor: '#87FF00',
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    
});