import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, Button, TouchableOpacity, Modal } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import BackDropDeta from '../Screens/BackDropDeta.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';

export default function ListaGasto({ navigation, route }) {

    const { usuario } = route.params;

    //Quitar LOG
    console.log(usuario)

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);
    const [totalPages, setTotalPages] = useState(0);
    const [selectedItem, setSelectedItem] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {

        // Cambio de IPv4
        axios
            .get('https://backmovil-production.up.railway.app/operaciones/basicas/gastos/' + usuario + '/' + currentPage + '/' + pageSize + '')
            .then(res => {
                setData(res.data.contaOutList);
                setTotalPages(res.data.totalPagina);
            })
            .catch((err) => {
                console.log(err + ' ' + err.response.data.message);
                alert("Error " + err.response.data.message);
                throw err;
            });

    };

    const deleteData = (id) => {

        // Cambio de IPv4
        axios
            .delete('https://backmovil-production.up.railway.app/contabilidad/' + id + '')
            .then(res => {
                alert("Registro eliminado con exito");
                fetchData()
            })
            .catch((err) => {
                console.log(err + ' ' + err.response.data.message);
                alert("Error " + err.response.data.message);
                throw err;
            });

    };

    const getData = (idContabilidad) => {

        // Cambio de IPv4
        axios
            .get('https://backmovil-production.up.railway.app/contabilidad/' + idContabilidad + '')
            .then(res => {
                setSelectedItem(res.data);
            })
            .catch((err) => {
                console.log(err + ' ' + err.response.data.message);
                alert("Error " + err.response.data.message);
                throw err;
            });

    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleOpenModal = (item) => {
        getData(item)
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <BackDropDeta />
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Feather name="menu" size={30} style={styles.menu} />
                    <Text style={styles.textDis}>INFORMACIÓN</Text>
                </View>
                <View style={styles.headerWrapperThow}>
                    <Button title='GASTO' color='#FFFFFF' onPress={() => navigation.navigate("ListGasto", { usuario })} />
                </View>
                <View style={styles.headerWrapperThree}>
                    <Button title='INGRESO' color='#FFFFFF' onPress={() => navigation.navigate("ListIngreso", { usuario })} />
                </View>
            </SafeAreaView>
            <View style={styles.containerTabla}>
                <Table>
                    <Row
                        data={['Gasto', 'Valor', 'Editar', 'Eliminar']}
                        style={styles.header}
                        textStyle={styles.headerText}
                    />
                    <Rows
                        data={data.map((item) => [
                            <TouchableOpacity onPress={() => handleOpenModal(item.id_contabilidad)}>
                                <Image style={styles.imgStyle} source={require('../scr/imgs/gasto.png')} />
                            </TouchableOpacity>,
                            item.valor,
                            <TouchableOpacity onPress={() => navigation.navigate("ActuaGasto", {usuario})}>
                                <Image style={styles.imgStyle} source={require('../scr/imgs/editar.png')} />
                            </TouchableOpacity>,
                            <TouchableOpacity onPress={() => deleteData(item.id_contabilidad)}>
                                <Image style={styles.imgStyle} source={require('../scr/imgs/borrar.png')} />
                            </TouchableOpacity>,
                        ])}
                        textStyle={styles.rowText}
                    />
                </Table>
                <Modal visible={modalVisible} onRequestClose={handleCloseModal}>
                    <View style={styles.modal}>
                        <Text style={styles.textModal}>Id: {selectedItem?.idCont} </Text>
                        <Text style={styles.textModal}>Valor: {selectedItem?.valor} </Text>
                        <Text style={styles.textModal}>Fecha: {selectedItem?.fecha} </Text>
                        <Text style={styles.textModal}>Categoria: {selectedItem?.cate} </Text>
                        <Text style={styles.textModal}>Descripción: {selectedItem?.descrip} </Text>
                        <Text style={styles.textModal}>usuario: {selectedItem?.usuario} </Text>
                        <Button style={styles.boton} title="Cerrar" onPress={handleCloseModal} />
                    </View>
                </Modal>
                <View style={styles.pagination}>
                    <Button title="Anterior" onPress={previousPage} disabled={currentPage === 1} />
                    <Button title="Siguiente" onPress={nextPage} disabled={currentPage === totalPages} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerTabla: {
        top: '-5%'
    },
    container: {
        flex: 1
    },
    header: {
        height: 40,
        backgroundColor: '#f1f8ff',
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    rowText: {
        top: '30%',
        textAlign: 'center',
        height: 40,
    },
    imgStyle: {
        left: '35%'
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
        paddingTop: 1,
        width: 310,
        fontWeight: 'bold',
        fontSize: 20
    },
    modal: {
        top: '40%',

    },
    textModal: {
        fontWeight: 'bold',
        left: '5%'
    },
    boton: {
        alignItems: 'center'
    }
});
