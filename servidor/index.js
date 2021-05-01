const express = require('express');
const app = express();
const port = 3031;
const { v4: uuidv4 } = require('uuid');

app.use(express.json());

const produtos = [
  {
    id: '1',
    produto: 'Bola jogue bem',
    descricao: 'Bola média',
    preco: '39,90',
    img: 'https://imagepng.org/wp-content/uploads/2017/10/bola.png',
    botao: 'Comprar bola',
  },
  {
    id: '2',
    produto: 'Chuteira chute bem',
    descricao: 'Chuteira preta para jogadores',
    preco: '479,00',
    img: 'https://rogerstenis.vteximg.com.br/arquivos/ids/2574818-505-505/1000414281_1.jpg?v=636881799375300000',
    botao: 'Comprar chuteira',
  },
  {
    id: '3',
    produto: 'Caneleira protetora',
    descricao: 'Caneleira amarela para profissionais',
    preco: '80,00',
    img: 'https://images.tcdn.com.br/img/img_prod/628041/caneleira_alyki_poker_adulto_10689_1_20200727161314.png',
    botao: 'Comprar caneleira',
  },
  {
    id: '4',
    produto: 'Camisa de time',
    descricao: 'Camisa de time da sorte',
    preco: '300,00',
    img: 'http://cdn.espn.com.br/image/livre/16128db7-335d-414c-8064-64cb9829b647.jpg',
    botao: 'Comprar caneleira',
  },
  {
    id: '5',
    produto: 'Capacete de alta proteção',
    descricao: 'Capacete para ciclistas',
    preco: '169,00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFrQ_yOWJX2W_3_oDhRHCNhuOqRBUJEDRaU19Rvxys3JQihmADpSMrTvzhJ1hTsopLdfSbxRA&usqp=CAc',
    botao: 'Comprar caneleira',
  },
  {
    id: '6',
    produto: 'Bicicleta alta velocidade',
    descricao: 'Bicicleta profissional para ciclistas',
    preco: '10.000,00',
    img: 'https://static3.tcdn.com.br/img/img_prod/697947/bicicleta_speed_tsw_aro_700_tr_10_qd_510_verde_preto_14995_1_20201026145840.jpg',
    botao: 'Comprar caneleira',
  },
];

var comentarios = [
  {
    id: uuidv4(),
    idProduto: '1',
    img:'https://i.pinimg.com/originals/dc/f9/68/dcf968b84fb66429e55dd072c5da05c7.png',
    pessoa: 'Preto:',
    comentario: 'Bola linda, ótima para peladas com amigos',
    estrelas: '5',
  },
  {
    id: uuidv4(),
    idProduto: '1',
    img:'https://i.pinimg.com/originals/c7/8f/9c/c78f9c888554a3633e0fcba4f8201027.png',
    pessoa: 'Branco:',
    comentario: 'Achei uma bola bastante peculiar e bonita por causa das cores brancas.',
    estrelas: '5',
  },
  {
    id: uuidv4(),
    idProduto: '1',
    img:'https://www.imagenspng.com.br/wp-content/uploads/2020/10/among-us-blue-png-01-783x1024.png',
    pessoa: 'Azul:',
    comentario: 'Não tem a principal cor que existe, péssima.',
    estrelas: '1',
  },
  {
    id: uuidv4(),
    idProduto: '2',
    img:'https://i.pinimg.com/originals/ba/81/63/ba81637d9c35cf181a299aba327e2e25.png',
    pessoa: 'Verde Escuro:',
    comentario: 'Acho confortável e um bom acabamento.',
    estrelas: '4',
  },
  {
    id: uuidv4(),
    idProduto: '2',
    img:'https://www.imagenspng.com.br/wp-content/uploads/2020/10/among-us-lime-png-01-787x1024.png',
    pessoa: 'Verde Claro:',
    comentario: 'Confortável, mas não gostei da cor.',
    estrelas: '3',
  },
  {
    id: uuidv4(),
    idProduto: '3',
    img:'https://i.pinimg.com/564x/79/77/e4/7977e43ebce3e136a0692dee9dc38c60.jpg',
    pessoa: 'Amarelo:',
    comentario: 'A caneleira mais linda e confortável que já vi em minha vida. A é cor é lindíssima.',
    estrelas: '5',
  },
  {
    id: uuidv4(),
    idProduto: '4',
    img:'https://i.pinimg.com/originals/c7/8f/9c/c78f9c888554a3633e0fcba4f8201027.png',
    pessoa: 'Branco:',
    comentario: 'Camisa linda e confortável!',
    estrelas: '5',
  },
  {
    id: uuidv4(),
    idProduto: '4',
    img:'https://i.pinimg.com/564x/79/77/e4/7977e43ebce3e136a0692dee9dc38c60.jpg',
    pessoa: 'Amarelo:',
    comentario: 'Camisa do meu time favorito',
    estrelas: '5',
  },
  {
    id: uuidv4(),
    idProduto: '4',
    img:'https://www.imagenspng.com.br/wp-content/uploads/2020/10/among-us-lime-png-01-787x1024.png',
    pessoa: 'Verde Claro:',
    comentario: 'Camisa do meu time rival!!',
    estrelas: '1',
  },
  {
    id: uuidv4(),
    idProduto: '5',
    img:'https://i.pinimg.com/originals/0a/df/6b/0adf6bb793036a77a2656568a04a6a30.png',
    pessoa: 'Rosa:',
    comentario: 'Ótimo capacete, caí de bicicleta a 84km/h e não morri graças a esse capacete.',
    estrelas: '5',
  },
  {
    id: uuidv4(),
    idProduto: '6',
    img:'https://i.pinimg.com/originals/dc/f9/68/dcf968b84fb66429e55dd072c5da05c7.png',
    pessoa: 'Preto:',
    comentario: 'A bicicleta mais cara que já vi na vida.',
    estrelas: '1',
  },
];

//Todos os produtos

app.get('/produtos', (req, res) => {
  res.send(produtos);
})
// Produto individual 

app.get('/produtos/:id', (req, res) => {
  const produto = produtos.filter((produto) => produto.id == req.params.id);
  res.send(produto[0]);   
});

//Comentário individual
app.get('/produtos/:idProduto/comentarios/:id', (req, res) => {
  const comentario = comentarios.filter((comentario) => comentario.id == req.params.id);
  res.send(comentario[0]);
});

//Todos os comentários
app.get('/produtos/:id/comentarios', (req, res) => {        
  const comentariosT = comentarios.filter((comentario) => comentario.idProduto == req.params.id);
  res.send(comentariosT);
});

//Adicionar comentário

app.post('/produtos/:idProduto/comentarios/', (req, res) => {
  const novoComentario = req.body;
  novoComentario.id = uuidv4();
  comentarios.push(novoComentario);    
  res.send(novoComentario);
});

//Apaga comentário

app.delete('/produtos/:idProduto/comentarios/:id', (req, res) => {
  comentarios = comentarios.filter((comentario) => comentario.id != req.params.id)
  res.send(comentarios);
});

app.listen(port, '0.0.0.0', () => {
  console.log('Servidor online');
});