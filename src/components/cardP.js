import React from "react";
import { View, Text, StyleSheet } from "react-native";

function cardP(props) {
  return (
    <View style={estilo.view}>
      <Text style={estilo.texto} onPress={props.tela}>
        {props.children}
      </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  view: {
    marginTop: 20,
    backgroundColor: "#EFF3F6",
    width: "42.5%",
    height: 140,
    justifyContent: "flex-end",
    borderRadius: 15,
    marginLeft: "5%",
  },
  texto: {
    color: "#7EA4C9",
    fontWeight: "700",
    fontSize: 16,
    margin: 10,
    paddingTop: 100,
  },
});

export default cardP;
