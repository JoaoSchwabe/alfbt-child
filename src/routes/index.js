import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Alfabeto from "../views/Alfabeto";
import Home from "../views/Home";
import Silabas from "../views/Silabas";
import FormandoPalavras from "../views/FormandoPalavras";
import LendoTextinhos from "../views/LendoTextinhos";
import AtividadesComplementares from "../views/AtividadesComplementares";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default Routes = () => {
  return (
    <>
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
        <Stack.Screen
          name="Atividades Complementares"
          component={AtividadesComplementares}
        />
      </Stack.Navigator>

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Alfabeto" component={Alfabeto} />
      </Drawer.Navigator>
    </>
  );
};
