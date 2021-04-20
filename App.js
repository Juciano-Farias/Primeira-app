import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import {  NavigationContainer } from "@react-navigation/native";

import Produtos from "./views/Produtos"
import Produto from "./views/Produto"
import Tabs from "./views/Tab"
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

export default function App() {
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
          name="Produto"
          component={Tabs}
          options={({navigation}) => ({ title: 'Produto'})}
          />          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};