import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Menu from "../components/menu";
import CardG from "../components/cardG";
import CardP from "../components/cardP";

export default Alfabeto = (props) => {
  return (
    <View style={styles.view}>
      <ScrollView>
        <Menu icon1={"arrow-back"} icon2={"home"} {...props}>Atividades Complementares</Menu>
        <CardG>Atividade 1</CardG>
        <CardG>Atividade 2</CardG>
        <CardG>Atividade 3</CardG>
        <CardG>Atividade 4</CardG>

      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    backgroundColor: "#FFF",
    flex: 1,
  },
});
