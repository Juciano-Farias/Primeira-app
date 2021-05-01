  
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Produto from "./Produto"
import Comentarios from "./Comentario"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Tabs(props) {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Produto"         
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='information-circle' size={26} color={color} />         
          }}>            
          {() => <Produto idProduto={props.route.params.idProduto} />}
        </Tab.Screen>
        <Tab.Screen name="Comentarios"
          options={{
              tabBarIcon: ({ color, size }) => <Ionicons name='chatbubble-ellipses' size={26} color={color} />                          
          }}>            
          {() => <Comentarios idProduto={props.route.params.idProduto} />
          }
        </Tab.Screen>   
    </Tab.Navigator>
  );
}