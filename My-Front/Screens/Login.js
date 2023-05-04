import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from "axios";


export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = () => {
    // Add your login logic here

    const login = {
      usuario,
      contrasena
    };

    if (usuario &&
      contrasena) {
      // Cambio de IPv4
      axios
        .post('https://backmovil-production.up.railway.app/login', login, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res.data === true) {
            alert("Autentificacion Exitosa");
            navigation.navigate('Principal', {usuario});
          } else if (res.data === false){
            alert('Usuario o contraseña incorrecta');
          }
        })
        .catch((err) => {
          console.log(err + ' ' + err.response.data.message);
          alert("Error " + err.response.data.message);
        });

    } else {
      alert("Error, LLene todo el formulario");
    }

  };

  return (
    <View style={styles.containerView} >
      <View style={styles.containerTopBar} >
        <Text style={styles.textIniciarSesion} >Iniciar Sesion</Text>
      </View>
      <View style={styles.containerForm} >
        <Text style={styles.textform} >Bienvenido</Text>
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
    top: '15%',
    fontWeight: 'bold',
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
    fontSize: 27,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: '27%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 22,
    borderColor: 'rgb(226, 223, 223)',
    borderBottomColor: 'rgb(194, 191, 191)',
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#FDE400',
    borderRadius: 40,
    marginTop: '2%',
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