import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function Registro() {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    

    const handleLogin = () => {
        // Add your login logic here
    };

    return (
        <ScrollView style={{ borderWidth: 1 }} >
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" >
                <View style={styles.containerView} >
                    <View style={styles.containerTopBar} >
                        <Text style={styles.textIniciarSesion} >Registro</Text>
                    </View>
                    <View style={styles.containerForm} >
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
                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Iniciar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        maxWidth: '100%'
    },
    containerTopBar: {
        backgroundColor: '#0CBD9D',
        height: '15%',
        width: '100%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textIniciarSesion: {
        color: 'rgb(255, 255, 255)',
        fontSize: 28,
    },
    containerForm: {
        marginTop: '40%',
        maxHeight: '37%',
        flex: 1,
        backgroundColor: 'rgb(226, 223, 223)',
        margin: 20,
        padding: 20,
        borderRadius: 40
    },
    textform: {
        fontSize: 24,
        alignSelf: 'center',
    },
    input: {
        height: '27%',
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        fontSize: 27,
        borderColor: 'rgb(226, 223, 223)',
        borderBottomColor: 'rgb(194, 191, 191)',
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#FDE400',
        borderRadius: 40,
        marginTop: 30,
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