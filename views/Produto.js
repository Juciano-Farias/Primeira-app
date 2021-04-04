import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import Card from "../components/Card";

import { getProduto } from '../services/ProdutoService';
import { getProdutos } from '../services/ProdutoService';

export default function Produto(props) {
  const [produto, setProduto] = useState({});

  useEffect(() => {
    async function loadContent() {
      const produto = await getProduto(props.route.params.idProduto);
      setProduto(produto);
    }
    loadContent();
  });

    return( <View>
        <Text>{produto.id}</Text>
        <Text>Olá</Text>
    </View>
    );
}
