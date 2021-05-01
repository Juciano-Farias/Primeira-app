import React from "react";

import { Button } from "react-native-paper";
import { Text, View, TextInput, StyleSheet} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Rating, AirbnbRating } from 'react-native-elements';


import { cadastrarComentario } from '../services/ProdutoService';

const { v4: uuidv4 } = require('uuid');

export default function Comentar(){
    const [nome, setNome] = React.useState("");
    const [comentario, setComentario] = React.useState("");
    const [estrelas, setEstrelas] = React.useState("");

    function qntEstrelas(rating) {
        setEstrelas(rating);
      }

  return <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.texto2}>Digite o seu comentário e clique em + para adicionar</Text>
                <Text style={styles.texto}>Digite o seu nome</Text>
                <TextInput 
                    style={styles.form_input}
                    onChangeText={setNome}
                    value={nome}/>
                <Text style={styles.texto}>Comentário</Text>
                <TextInput 
                    style={styles.form_input_comment}
                    onChangeText={setComentario}
                    value={comentario}/>
                <Text style={styles.texto}>Avaliação</Text>
                    <Rating
  showRating
  onFinishRating={qntEstrelas}
  style={{ paddingVertical: 10 }}
/>
                <Button
                    
                    style={styles.bt}                  
                    title="Cadastrar comentário"                    
                    onPress={() => cadastrarComentario( 1, {
                        id: uuidv4(),
                        idProduto: '4',
                        pessoa: nome + ':',
                        comentario: comentario,
                        img: 'https://conteudo.imguol.com.br/c/bol/fotos/6f/2018/06/15/sem-foto-de-perfil-1529109983403_615x300.jpgx',
                        estrelas: estrelas,      
                    })} >
                        <Ionicons name="add" mode="checkmark" size={50} color="#000000" />
                    </Button>
            </View>
        </View>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFFFFF',     
    },
    form:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: "#000",
    },
    form_input:{
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 15,
        marginBottom: 15,
        marginTop: 5, 
        marginHorizontal: 20,
        paddingHorizontal: 20,
    },
    form_input_comment:{
        borderWidth: 1,
        paddingHorizontal: 20,
        borderColor: '#000000',
        borderRadius: 15,
        marginBottom: 15,
        marginTop: 10,
        marginHorizontal: 20, 
        height: 200,
    },
    texto:{
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    texto2:{
        color: '#000000',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 50,
        marginTop: 20,
        borderWidth: 2
    }
})