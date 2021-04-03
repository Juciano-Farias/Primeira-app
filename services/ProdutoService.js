import axios from 'axios';

var getProdutos = async () => {
  const response = await axios.get('http://192.168.0.107:3031/produtos');
  return response.data;
}

var getProduto = async (id) => {
   const response = await axios.get('http://192.168.0.107:3031/produtos' + id);
   return response.data;
 }

export {getProdutos, getProduto};