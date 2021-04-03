import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect} from "react";
import { StyleSheet, View, FlatList } from "react-native";


import Card from "../components/Card";

import { getProdutos } from "../services/ProdutoService"

export default function Produtos(props) {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
   async function loadContent() {
     const produtos = await getProdutos();
     setProdutos(produtos);
   }
   loadContent();
  });

  var renderItem = ({ item }) => {
    return <Card
      {...props}
      produto={item.produto}
      descricao={item.descricao}
      img={item.img}
      botao={item.botao}
    />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#888888',
    paddingTop: 25,
    padding: 10,
  }, 
}); 