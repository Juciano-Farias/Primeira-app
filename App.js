import React from "react";

import { Button } from "react-native-paper";
import { createStackNavigator } from '@react-navigation/stack';
import {  NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Produtos from "./views/Produtos"
import Tabs from "./views/Tab"
import { StatusBar } from "expo-status-bar";
import Comentar from "./views/AdComentario"

const Stack = createStackNavigator();

// Coloca o nome certo em cada página
function nome(route) {
  const rota = getFocusedRouteNameFromRoute(route) ?? "Informações";

  switch (rota) {
    case "Informações":
      return "Informações";
    case "Comentarios":
      return "Comentários";
  }
}

//Coloca o icone somente na tela de comentários
function bt(route, navigation) {
  const rota = getFocusedRouteNameFromRoute(route) ?? "Informações";
  switch (rota) {
    case "Informações":
      return null;
    case "Comentarios":
      return (
        <Button onPress={() => navigation.navigate("Comentar", navigation)}>
          <Ionicons name="add" mode="contained" size={25} color="black" />
        </Button>
      );
  }
}

export default function App(props) {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
          <Stack.Screen 
          name="Produtos"
          component={Produtos}
          options={{title:'Produtos'}}
          />
          <Stack.Screen 
        options={({ route, navigation }) => ({
          headerTitle: nome(route),
          headerRight: () => bt(route, navigation),
        })}
        name="Produto"
        component={Tabs}
          />        
          <Stack.Screen name="Comentar" component={Comentar} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};