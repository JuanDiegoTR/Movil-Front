import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import BackDropDeta from '../Screens/BackDropDeta.js';
import Drawer from 'react-native-drawer';
import { TouchableOpacity } from 'react-native';


const closeDrawer = () => {
    this.drawer.close();
};

const openDrawer = () => {
    this.drawer.open();
};
export default function Burguer() {
    return (
        <Drawer
            ref={(ref) => {
                this.drawer = ref;
            }}
            content={<Menu />}
            onClose={() => closeDrawer()}
            openDrawerOffset={0.2}
            panCloseMask={0.2}
            styles={{
                drawer: { shadowColor: "#OCBD9D", shadowOpacity: 0.8, shadowRadius: 3 },
                main: { paddingLeft: 3 },
            }}
        >
            <View>
                <Button title="menu" onPress={() => openDrawer()} />
                <TouchableOpacity>
                    <Text>Pantalla Principal</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Exportar Excel</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Consejos</Text>
                </TouchableOpacity>
            </View>
        </Drawer>
    );
}
