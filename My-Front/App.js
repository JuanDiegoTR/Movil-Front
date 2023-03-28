import { StatusBar } from 'expo-status-bar'
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

export default function App() {

  return (
    <View style={styles.container}>
      <BackDrop />
      <Image style={styles.imgStyle} source={require('./scr/imgs/LOGO.png')} />
      <Text style={styles.titulo}>¡Le damos la bienvenida a DINNY!</Text>
      <Text style={styles.subtitulo}>DINNY te ayuda a llevar un control y estar informado de como administrar tu dinero</Text>
      <SafeAreaView>
        <TouchableOpacity style={{backgroundColor: '#FDE400', borderRadius : 40,padding : 20}}>
          <Text style = {{fontWeight : 'bold'}}>COMENZAR</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <StatusBar style="auto" />
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
  titulo: {
    fontSize: 25,
    color: '#0BDC84',
    fontWeight: 'bold'
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
