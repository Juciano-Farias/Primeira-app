import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect} from "react";
import { StyleSheet, View, FlatList } from "react-native";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

import Card from "../components/Card";

import { getProdutos } from '../services/ProdutoService';

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
      navigation={props.navigation}
      id={item.id} 
      produto={item.produto}
      preco={item.preco}
      img={item.img}
      botao={item.botao}
    />
;
  }

  var bannerError = (e) => {console.log(e)}

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
            <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={bannerError} />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#3951B5',
    paddingTop: 25,
    padding: 10,
  }, 
}); 


