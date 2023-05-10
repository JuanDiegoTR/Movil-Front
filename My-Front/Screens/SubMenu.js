import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import { StyleSheet } from 'react-native';

const SubMenu = ({ onClose }) => {
    return (
        <View style={style.subMenuContainer}>
            <TouchableOpacity onPress={onClose}>
                <Text style={style.closeButton}>Cerrar submenú</Text>
            </TouchableOpacity>
            <Text>Principal</Text>
            <Text>Exporta Excel</Text>
            <Text>Consejos</Text>
            <TouchableOpacity onPress={onClose}>
                <Text style={style.closeButton}></Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    subMenuContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        backgroundColor: '#E2EEE8',
    },
    closeButton: {
        color: 'red',
    },
});

SubMenu.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default SubMenu;