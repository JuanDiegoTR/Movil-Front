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
                        <Text style={styles.title}>Crea un presupuesto</Text>
                    </TouchableOpacity>
                    {expanded && (
                        <View style={styles.content}>
                            <Text>Establecer un presupuesto es fundamental para tener un control claro de tus ingresos y gastos. Analiza tus ingresos mensuales y asigna cantidades específicas a diferentes categorías, como vivienda, alimentos, transporte, entretenimiento y ahorros. Asegúrate de seguir tu presupuesto y ajustarlo según sea necesario.</Text>
                        </View>
                    )}
                    <TouchableOpacity onPress={toggleAccordion2} style={styles.header}>
                        <Text style={styles.title}>Ahorra regularmente</Text>
                    </TouchableOpacity>
                    {expanded2 && (
                        <View style={styles.content}>
                            <Text>Cultiva el hábito del ahorro. Establece metas de ahorro realistas y destina una parte de tus ingresos a un fondo de emergencia y ahorros a largo plazo. Automatiza tus ahorros estableciendo transferencias automáticas a una cuenta separada, lo que te ayudará a ahorrar de manera sistemática.</Text>
                        </View>
                    )}
                    <TouchableOpacity onPress={toggleAccordion3} style={styles.header}>
                        <Text style={styles.title}>Reduce y controla tus deudas</Text>
                    </TouchableOpacity>
                    {expanded3 && (
                        <View style={styles.content}>
                            <Text>Si tienes deudas, prioriza pagarlas. Identifica tus deudas de mayor interés y establece un plan de pago. Considera consolidar tus deudas en un préstamo con tasas de interés más bajas o negociar con tus acreedores para obtener mejores condiciones. Además, evita contraer nuevas deudas innecesarias y utiliza el crédito de manera responsable.</Text>
                        </View>
                    )}
                    <TouchableOpacity onPress={toggleAccordion4} style={styles.header}>
                        <Text style={styles.title}>Planifica tus compras</Text>
                    </TouchableOpacity>
                    {expanded4 && (
                        <View style={styles.content}>
                            <Text>Antes de realizar una compra importante, como un electrodoméstico o un vehículo, investiga y compara precios. Considera la opción de comprar artículos usados en buen estado en lugar de nuevos. Además, evita las compras impulsivas y dale tiempo para reflexionar antes de adquirir algo costoso.</Text>
                        </View>
                    )}
                    <TouchableOpacity onPress={toggleAccordion5} style={styles.header}>
                        <Text style={styles.title}>Aumenta tus conocimientos financieros</Text>
                    </TouchableOpacity>
                    {expanded5 && (
                        <View style={styles.content}>
                            <Text>Educate en temas financieros para tomar decisiones más informadas. Lee libros, asiste a talleres o cursos en línea sobre finanzas personales e inversiones. Aprende sobre conceptos clave, como diversificación de inversiones, interés compuesto y gestión del riesgo.</Text>
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
