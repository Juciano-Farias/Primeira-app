import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect} from "react";
import { StyleSheet, View, FlatList } from "react-native";

import CardComentarios from "../components/CardComentarios";

import { getComentarios } from '../services/ProdutoService';

export default function Comentarios(props) {

  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    async function loadContent() {
      const comentarios = await getComentarios(props.idProduto);
      setComentarios(comentarios);
    }
    loadContent();
  });

  var renderItem = ({ item }) => {
    return <CardComentarios
      navigation={props.navigation}
      id={item.id} 
      idProduto={item.idProduto}
      pessoa={item.pessoa}
      comentario={item.comentario}
      img={item.img}
      estrelas={item.estrelas}
    />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={comentarios}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 25,
    padding: 10,
  }, 
}); 