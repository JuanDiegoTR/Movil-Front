import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const ALTURA_BACKDROP = height * 0.3;

function BackDropDetaFinal({ scrollX }) {
    return (
      <View style={[{
        height: ALTURA_BACKDROP,
        width, position: "absolute", top: 0, backgroundColor: '#0CBD9D', borderRadius: 30
      }]}>
      </View>
    )
  }

  export default BackDropDetaFinal;