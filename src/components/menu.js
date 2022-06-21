import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";

const menu = (props) => {
  if (props.icon1 && props.icon2) {
    style = estilo.img;
  } else {
    style = estilo.imgC;
  }
  const navigation = props.navigation;
  return (
    <SafeAreaView style={estilo.menu}>
      <View style={style}>
        <Ionicons
          name={props.icon1}
          size={28}
          color="white"
          style={estilo.icon1}
          onPress={() => props.navigation.goBack()}
        />
        <Image source={require("./assets/alfbt.png")} style={estilo.imagem} />
        <Entypo
          name={props.icon2}
          size={28}
          color="white"
          style={estilo.icon2}
          onPress={() => navigation.navigate("Home")}
        />
      </View>

      <Text style={estilo.texto}>{props.children}</Text>
    </SafeAreaView>
  );
};
const estilo = StyleSheet.create({
  menu: {
    paddingTop: 10,
    backgroundColor: "#B0D3E9",
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  texto: {
    fontWeight: "700",
    color: "white",
    fontSize: 22,
    paddingLeft: 15,
    paddingBottom: 10,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  img: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgC: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  imagem: {
    width: 100,
    height: 60,
    resizeMode: "contain",
  },
  icon1: {
    marginVertical: 20,
    marginLeft: 15,
  },
  icon2: {
    marginVertical: 20,
    marginRight: 15,
  },
});

export default menu;
