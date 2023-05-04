import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button, requireNativeComponent } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from "axios";


export default function RegGasto({navigation, route}){
    const { usuario } = route.params;

    const [listIngre, setListIngre] = useState ([]);



}