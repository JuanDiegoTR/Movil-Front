import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
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
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Principal")}>
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
    top:'15%',
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