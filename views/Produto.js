import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

import { getProduto } from '../services/ProdutoService';


export default function Produto(props) {
  const [produto, setProduto] = useState({});

  useEffect(() => {
    async function loadContent() {     
      const produto = await getProduto(props.idProduto);
      setProduto(produto);
    }
    loadContent();
  })

    return ( <>
      <View style={styles.container}>
        <Image style={styles.foto} source={{ uri: produto.img }} />
        <View style={styles.container2}>
          <Text>{produto.produto}</Text>
          <Text styles={styles.preco}>R$:{produto.preco}</Text>
        </View>
        <Text>{produto.descricao}</Text>
    </View>
    </>
    
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  foto:{
    height: 200,
    width: 200,
    marginTop: 70,
    marginBottom: 70,
  },
  preco:{
    padding: 50,
  },
  container2:{
    paddingBottom: 50,
  },

});
