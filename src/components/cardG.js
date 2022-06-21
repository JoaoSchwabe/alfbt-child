import React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';


const CardG = (props) => {
  return (
    <>
      <View style={estilo.view}>
        <View style={estilo.row}>

          <Image source={props.img} style={estilo.img} />
          <Text style={estilo.texto}>{props.children}</Text>
        </View>
      </View>
    </>
  );
};
const estilo = StyleSheet.create({
  view: {
    marginHorizontal: '5%',
    width: '90%',
    borderRadius: 15,
    marginTop: 40,
    backgroundColor: '#EFF3F6',
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
  },
  texto: {
    color: '#7EA4C9',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '900',
  },
  img: {
    opacity: 0.2,
  },
  row: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
  },

});

export default CardG;
