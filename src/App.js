import React from "react";
// import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Dimensions,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Alfabeto from "./views/Alfabeto";
import Home from "./views/Home";
import Silabas from "./views/Silabas";
import FormandoPalavras from "./views/FormandoPalavras";
import LendoTextinhos from "./views/LendoTextinhos";

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Alfabeto" component={Alfabeto} />
        <Stack.Screen name="Silabas" component={Silabas} />
        <Stack.Screen name="Formando Palavras" component={FormandoPalavras} />
        <Stack.Screen name="Lendo textinhos" component={LendoTextinhos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
