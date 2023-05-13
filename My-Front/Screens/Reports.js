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

    const [fechaI, setFechaInicio] = useState('');
    const [fechaF, setFechaFin] = useState('');
    const handleValueChange = (value) => {
        setIdDescripcion(value);
    };

    const tableData = [
        [<TextInput
            style={style.input}
            placeholder="Valor"
            keyboardType="numeric"
            autoCapitalize="none"
            onChangeText={(text) => setFechaI(text)}
            value={fechaI} />,
        <TextInput
            style={style.input}
            placeholder="Valor"
            keyboardType="numeric"
            autoCapitalize="none"
            onChangeText={(text) => setFechaF(text)}
            value={fechaF} />]
    ];

    const handleFechaInicioChange = (value) => {
        setFechaInicio(value);
      };
    
      const handleFechaFinChange = (value) => {
        setFechaFin(value);
      };

    return (
        <View style={style.container}>
            <BackDropFinal />
            <Text style={style.titlePrimary}>REPORTES</Text>
            <Image style={style.imgStyle} source={require('../scr/imgs/LogoPequeño.png')} />
            <SafeAreaView>
                <View>
                    <Text style={style.fechaInico}>Fecha Inicio</Text>
                    <TextInput style={style.input}
                        placeholder="YYYY-MM-DD"
                        onChangeText={handleFechaInicioChange}
                        value={fechaI}/>
                </View>
                <View>
                    <Text style={style.fechaFin}>Fecha Fin</Text>
                    <TextInput
                        style={style.input}
                        placeholder="YYYY-MM-DD"
                        onChangeText={handleFechaFinChange}
                        value={fechaF}
                    />
                </View>
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
                <View style={style.exportButtonContainer}>
                <TouchableOpacity style={style.exportButton}>
                    <Text style={style.exportButtonText}>Exportar</Text>
                </TouchableOpacity>
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
        textAlign: 'center',
    },
    imgStyle: {
        width: "72%",
        height: "22%",
        marginTop: 40,
        borderRadius: 100,
        margin: "15%"
    },
    fechaInico: {
        fontWeight: 'bold',
        color: '#969494',
        marginLeft:'37%',
    },
    fechaFin: {
        fontWeight: 'bold',
        marginLeft: '1%',
        color: '#969494',
        marginTop: '5%',
        alignItems: 'center',
        marginLeft:'40%',
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
        height: '1%',
        width:'4%',
        marginVertical: 1,
        padding: 8,
        borderColor: '#ccc',
        borderRadius: 5,
        fontSize: 18,
        borderColor: 'rgb(226, 223, 223)',
        borderBottomColor: 'rgb(194, 191, 191)',
        backgroundColor: 'rgb(226, 223, 223)',
        alignItems:'center',
        
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
    exportButton: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    exportButtonText: {
        color: 'white',
        fontSize: 20,
    },
    exportButtonContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
});