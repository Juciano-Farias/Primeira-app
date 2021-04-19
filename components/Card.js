
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.foto} source={{ uri: props.img }} />
      <View style={styles.card_description}>
        <Text>{props.produto}</Text>
        <Text>R$: {props.preco}</Text>
        <Button title={props.botao} onPress={() => props.navigation.navigate('Produto', 
        {id: props.id},
        )} />
      </View>
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