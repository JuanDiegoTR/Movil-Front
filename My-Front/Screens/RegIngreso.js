import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from "axios";
import RNPickerSelect from 'react-native-picker-select';

export default function RegIngreso({ navigation, route }) {

    const { usuario } = route.params;
    //Quitar LOG
    console.log(usuario)

    const [listIngre, setListIngre] = useState([]);

    const [idCategoria, setIdCategoria] = useState('');//YA
    const [idDescripcion, setIdDescripcion] = useState('');//YA
    const [idTipo, setIdTipo] = useState(1);//YA
    const [idUsuario, setIdUsuario] = useState('');//YA
    const [valor, setValor] = useState('');//YA

    const tableData = [
        [<TouchableOpacity onPress={() => setIdCategoria(1)}>
            <Image style={styles.imgStyle} source={require('../scr/imgs/trabajo.png')} resizeMethod="contain" />
        </TouchableOpacity>,
        <TouchableOpacity onPress={() => setIdCategoria(3)}>
            <Image style={styles.imgStyle} source={require('../scr/imgs/pago.png')} resizeMethod="contain" />
        </TouchableOpacity>]
    ];

    useEffect(() => {

        const handleSubmit = () => {
            // Cambio de IPv4
            axios
                .get('https://backmovil-production.up.railway.app/descripcion/lista/ingreso')
                .then(res => {
                    setListIngre(res.data)
                })
                .catch((err) => {
                    console.log(err + ' ' + err.response.data.message);
                    alert("Error " + err.response.data.message);
                    throw err;
                });

        };

        const userId = () => {
            // Cambio de IPv4
            axios
                .get('https://backmovil-production.up.railway.app/usuario/' + usuario + '')
                .then(res => {
                    setIdUsuario(res.data.id_usuario)
                })
                .catch((err) => {
                    console.log(err + ' ' + err.response.data.message);
                    alert("Error " + err.response.data.message);
                    throw err;
                });

        };

        userId();
        handleSubmit();
    }, []);

    const nuevoReg = () => {
        const datap = {
            idCategoria,
            idDescripcion,
            idTipo,
            idUsuario,
            valor
        };

        if (idCategoria &&
            idDescripcion &&
            idTipo &&
            idUsuario &&
            valor) {

            // Cambio de IPv4
            axios
                .post('https://backmovil-production.up.railway.app/contabilidad', datap, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => {
                    alert("Ingreso guardado");
                    navigation.navigate("Principal", { usuario });
                })
                .catch((err) => {
                    console.log(err + ' ' + err.response.data.message);
                    alert("Error " + err.response.data.message);
                    throw err;
                });

        } else {
            alert("Error, LLene todo el formulario");
        }


    };



    const handleValueChange = (value) => {
        setIdDescripcion(value);
    };

    return (
        <View style={styles.containerView} >
            <View style={styles.containerTopBar} >
                <Text style={styles.textIniciarSesion} >Ingreso</Text>
            </View>
            <View style={styles.containerForm}>
                <TextInput
                    style={styles.input}
                    placeholder="Valor"
                    keyboardType="numeric"
                    autoCapitalize="none"
                    onChangeText={(text) => setValor(text)}
                    value={valor}
                />
                <Text style={styles.textCa}>Categoria</Text>
                <Table>
                    <Rows data={tableData} />
                </Table>
                <View style={styles.selec}>
                    <RNPickerSelect
                        placeholder={{ label: 'Descripción', value: null }}
                        onValueChange={handleValueChange}
                        items={listIngre.map((list) => ({ label: list.descrip, value: list.id }))}
                        value={idDescripcion}
                        textStyle={styles.selecText}
                    />
                </View>
                <View style={styles.contanerBoton}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Principal", { usuario })}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button2} onPress={nuevoReg}>
                            <Text style={styles.buttonText}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        maxWidth: '100%'
    },
    containerTopBar: {
        backgroundColor: '#0CBD9D',
        height: '18%',
        width: '100%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textIniciarSesion: {
        color: 'rgb(255, 255, 255)',
        fontSize: 30,
        top: '15%',
        fontWeight: 'bold',
    },
    containerForm: {
        marginTop: '4%',
        flex: 1,
        margin: 25,
        padding: 20,
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
    button1: {
        width: '40%',
        height: '10%',
        marginTop: '25%',
        justifyContent: 'center',
        backgroundColor: '#FF4D00',
        borderRadius: 30,
    },
    button2: {
        width: '40%',
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
    contanerBoton: {
        top: '4%',
        flexDirection: 'row',
        paddingHorizontal: 20,
        height: '70%',
        width: '170%',
        left: '-5%'
    },
    buttonContainer: {
        flex: 1, // Ocupar el espacio disponible en la fila
        marginHorizontal: -1, // Espacio horizontal entre los botones
    },
    imgStyle: {
        left: '30%',
        marginTop: '25%'
    },
    textCa: {
        top: '3%',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    selec: {
        flexDirection: 'row',
        top: '12%',
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        color: 'black',
    },
    selecText: {
        color: 'black',
    }
});