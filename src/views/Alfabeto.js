import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import Menu from "../components/menu";
import CardG from "../components/cardG";
import CardP from "../components/cardP";

export default Alfabeto = (props) => {
  return (
    <SafeAreaView style={styles.view}>
      <ScrollView>
        <StatusBar backgroundColor="#B0D3E9" translucent={true} />
        <Menu icon1={"arrow-back"} icon2={"home"} {...props}>Alfabeto</Menu>
        <CardG>As 26 letras</CardG>
        <CardG>Vogais</CardG>
        <CardG>Consoantes</CardG>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#FFF",
    flex: 1,
  },
});
