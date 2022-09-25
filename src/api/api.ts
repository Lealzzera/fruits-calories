import axios from 'axios';

const instanceAxiosFruits = axios.create({
  baseURL: 'https://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json'
});

export const api = {
  getFruits: async () => {
    let response = await instanceAxiosFruits.get('');
    return response.data;
  }
}