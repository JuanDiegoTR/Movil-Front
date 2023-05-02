import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import axios from "axios";

export default function Registro({ navigation }) {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleSubmit = () => {
        const datap = {
            contrasena,
            correo,
            nombre,
            telefono,
            usuario
        };

        if (nombre &&
            correo &&
            telefono &&
            usuario &&
            contrasena) {

            // Cambio de IPv4
            axios
                .post('http://192.168.0.13:8080/usuario', datap, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => {
                    console.log(res.data);
                    alert("Usuario Guardado Exitosamente");
                    navigation.navigate('Logueo');
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

    return (
        <View style={styles.containerView} >
            <View style={styles.containerTopBar} >
                <Text style={styles.textIniciarSesion} >Registro</Text>
            </View>
            <View style={styles.containerForm}>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    keyboardType="default"
                    autoCapitalize="sentences"
                    onChangeText={(text) => setNombre(text)}
                    value={nombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Correo"
                    keyboardType="default"
                    autoCapitalize="none"
                    onChangeText={(text) => setCorreo(text)}
                    value={correo}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefono"
                    keyboardType="numeric"
                    autoCapitalize="none"
                    onChangeText={(text) => setTelefono(text)}
                    value={telefono}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    keyboardType="default"
                    autoCapitalize="none"
                    onChangeText={(text) => setUsuario(text)}
                    value={usuario}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={(text) => setContrasena(text)}
                    value={contrasena}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
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
        marginTop: '16%',
        maxHeight: '55%',
        flex: 1,
        backgroundColor: 'rgb(226, 223, 223)',
        margin: 25,
        padding: 30,
        borderRadius: 30
    },
    textform: {
        fontSize: 24,
        alignSelf: 'center',
    },
    input: {
        height: '20%',
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
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#FDE400',
        borderRadius: 40,
        marginTop: 45,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
});