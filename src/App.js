import React from "react";
import { Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Alfabeto from "./views/Alfabeto";
import Home from "./views/Home";
import Silabas from "./views/Silabas";
import FormandoPalavras from "./views/FormandoPalavras";
import LendoTextinhos from "./views/LendoTextinhos";
import AtividadesComplementares from "./views/AtividadesComplementares";

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <>
      <StatusBar
        backgroundColor="#B0D3E9"
        style="inverted"
        translucent={false}
      />
      {/* <StatusBar backgroundColor="#B0D3E9" style="inverted" animated={true}/> */}
      <NavigationContainer background={"#B0D3E9"}>
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
      </NavigationContainer>
    </>
  );
};
