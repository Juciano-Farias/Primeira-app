import Ionicons from 'react-native-vector-icons/Ionicons';
import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import { removerComentario } from '../services/ProdutoService';

export default function CardComentarios(props) {
  var estrelas = "";

  for (var n = 0; n < props.estrelas; n++) {
    estrelas += "⭐";
  }

  return (
    <View style={styles.card}>
      <Image style={styles.foto} source={{ uri: props.img }} />
      <View style={styles.card_description}>
        <Text>{props.pessoa}</Text>
        <Text>{props.comentario}</Text>
        <Text>{estrelas}</Text>
      </View>
      <Ionicons style={styles.closeButton}
          name="trash"
          size={18}
          onPress={() => removerComentario(props.id, props.idProduto)} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 0,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#000",
  },
  card_description: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#000",
  },
  foto: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
});