import axios from 'axios';

var getProdutos = async () => {
  const response = await axios.get('http://192.168.0.107:3031/produtos');
  return response.data;
}

var getProduto = async (id) => {
   const response = await axios.get('http://192.168.0.107:3031/produtos/' + id);
   return response.data;
 }

 var getComentarios = async (id) => { 
  const response = await axios.get('http://192.168.0.107:3031/produtos/'+id+'/comentarios');
  return response.data;
}

var removerComentario = async (id, idProduto) => {
  const response = await axios.delete('http://192.168.0.107:3031/produtos/'+idProduto+'/comentarios/'+id);
  return response.data;
}
var cadastrarComentario = async(idProduto, comentario) =>{
  const response = await axios.post('http://192.168.0.107:3031/produtos/'+idProduto+'/comentarios/', comentario);
  return response.data;  
}

export {getProdutos, getProduto, getComentarios, removerComentario, cadastrarComentario}; 