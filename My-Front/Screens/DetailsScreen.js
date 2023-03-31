import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TouchableHighlight, TouchableOpacity } from 'react-native'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ESPACIO_CONTENEDOR = width * 0.7;
const ESAPACIO = 10;
const ALTURA_BACKDROP = height * 0.4;

function BackDrop({ scrollX }) {
  return (
    <View style={[{
      height: ALTURA_BACKDROP,
      width, position: "absolute", top: 0, backgroundColor: '#0CBD9D', borderRadius: 30
    }]}>
    </View>
  )
}


function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BackDrop />
      <Image style={styles.imgStyle} source={require('../scr/imgs/LOGO.png')} />
      <Text style={styles.subtitulo}>Registrate para guardar tu información</Text>
      <SafeAreaView>
        <TouchableOpacity style={{ backgroundColor: '#FDE400', borderRadius: 40, padding: 20 }} onPress={() => navigation.navigate("Registrarse")} >
          <Text style={{ fontWeight: 'bold' }}>Registrarse</Text>
        </TouchableOpacity>
        <Button title='Iniciar Sesion' onPress={() => navigation.navigate("Logueo")} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: 200,
    height: 180,
    marginTop: 0,
    borderRadius: 150
  }
});

export default DetailsScreen;