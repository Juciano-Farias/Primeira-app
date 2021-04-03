import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import {  NavigationContainer } from "@react-navigation/native";

import Produtos from "./views/Produtos"
import Produto from "./views/Produto"
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Produtos"
          component={Produtos}
          options={{title:'Cartilha de serviços'}}
          />
          <Stack.Screen name="Produto"
          component={Produto}
          options={{title:'Tela de produto'}}
          />          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};