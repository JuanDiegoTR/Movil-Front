import React from "react";
import { TouchableOpacity, Text, view, Image, Pressable } from "react-native";

const PaginaPrincipal = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            height: "100%",
            width: "100%",
            backgroundColor: "white"
        }}>
            <Text
                style={{
                    alignSelf: 'center',
                    marginTop: 80,
                    color: '#1B1E37',
                    fontSize: 25
                }}>
                Fundación MIA</Text>
            <Text
                style={{
                    alignSelf: 'center',
                    marginTop: 20,
                    color: '#1B1E37',
                    fontSize: 25
                }}>
                Construyendo Futuro</Text>
        </View>
    )
}

export default PaginaPrincipal