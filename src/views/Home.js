import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import Menu from "../components/menu";
import CardG from "../components/cardG";
import CardP from "../components/cardP";

function Home(props) {
  const navigation = props.navigation 
  return (
    <SafeAreaView style={styles.view}>
      <ScrollView>
        <StatusBar backgroundColor="#B0D3E9" translucent={true} />
        <Menu {...props}>Bem vindo</Menu>
        <CardG tela={() => navigation.navigate("Atividades Complementares")} img={require("../components/assets/cojura.png")}>
          {"Atividades\nComplementares"}
        </CardG>
        <View>
          <View style={styles.carP}>
            <CardP tela={() => navigation.navigate("Alfabeto")}>Alfabeto</CardP>
            <CardP tela={() => navigation.navigate("Silabas")}>Sílabas</CardP>
          </View>
          <View style={styles.carP}>
            <CardP tela={() => navigation.navigate("Formando Palavras")}>
              Formando palavras
            </CardP>
            <CardP tela={() => navigation.navigate("Lendo textinhos")}>
              Lendo textinhos
            </CardP>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  carP: {
    flexDirection: "row",
  },
});

export default Home;
