import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';
import BackDropFinal from '../Screens/BackDropFinal.js';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios'; 

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export default function Coonsejos({ navigation, route }) {

    const { usuario } = route.params;

    //Quitar LOG
    console.log(usuario)

    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);
    const [expanded5, setExpanded5] = useState(false);

    const toggleAccordion = () => {
        setExpanded(!expanded);
    };

    const toggleAccordion2 = () => {
        setExpanded2(!expanded2);
    };

    const toggleAccordion3 = () => {
        setExpanded3(!expanded3);
    };

    const toggleAccordion4 = () => {
        setExpanded4(!expanded4);
    };

    const toggleAccordion5 = () => {
        setExpanded5(!expanded5);
    };

    return (
        <View style={styles.container}>
            <BackDropFinal />
            <Text style={styles.titlePrimary}>Consejos para mejorar tus finanzas</Text>
            <Image style={styles.imgStyle} source={require('../scr/imgs/LOGO.png')} />
            <ScrollView style = {styles.scroll}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
                        <Text style={styles.title}>HOLA BIENVENISDOA</Text>
                    </TouchableOpacity>
                    {expanded && (
                        <View style={styles.content}>
                            <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit donec nibh, arcu nec hendrerit phasellus enim quis commodo eget, himenaeos turpis neque in urna dui mauris risus.</Text>
                        </View>
                    )}
                    <TouchableOpacity onPress={toggleAccordion2} style={styles.header}>
                        <Text style={styles.title}>HOLA BIENVENISDOA</Text>
                    </TouchableOpacity>
                    {expanded2 && (
                        <View style={styles.content}>
                            <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit donec nibh, arcu nec hendrerit phasellus enim quis commodo eget, himenaeos turpis neque in urna dui mauris risus.</Text>
                        </View>
                    )}
                    <TouchableOpacity onPress={toggleAccordion3} style={styles.header}>
                        <Text style={styles.title}>HOLA BIENVENISDOA</Text>
                    </TouchableOpacity>
                    {expanded3 && (
                        <View style={styles.content}>
                            <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit donec nibh, arcu nec hendrerit phasellus enim quis commodo eget, himenaeos turpis neque in urna dui mauris risus.</Text>
                        </View>
                    )}
                    <TouchableOpacity onPress={toggleAccordion4} style={styles.header}>
                        <Text style={styles.title}>HOLA BIENVENISDOA</Text>
                    </TouchableOpacity>
                    {expanded4 && (
                        <View style={styles.content}>
                            <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit donec nibh, arcu nec hendrerit phasellus enim quis commodo eget, himenaeos turpis neque in urna dui mauris risus.</Text>
                        </View>
                    )}
                    <TouchableOpacity onPress={toggleAccordion5} style={styles.header}>
                        <Text style={styles.title}>HOLA BIENVENISDOA</Text>
                    </TouchableOpacity>
                    {expanded5 && (
                        <View style={styles.content}>
                            <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit donec nibh, arcu nec hendrerit phasellus enim quis commodo eget, himenaeos turpis neque in urna dui mauris risus.</Text>
                        </View>
                    )}
                </View>
                </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10
    },
    header: {
        top: 10,
        padding: 12,
        height:50,
        backgroundColor: '#f2f2f2',
        borderRadius: 30,
        marginBottom:10,
    },
    title: {
        fontWeight: 'bold',
    },
    content: {
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtitulo: {
        fontSize: 15,
        padding: 30,
        fontWeight: 'bold'
    },
    imgStyle: {
        width: "70%",
        height: "30%",
        marginTop: 30,
        borderRadius: 100,
        margin: "12%"
    },
    titlePrimary : {
        fontWeight: 'bold',
        color : '#FFFFFF',
        fontSize: 15,
        padding: 30,
    },
    scroll : {
        top:-10
    }

});
