export const Api = {
  getFruits: async () => {
    let response = await fetch('http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json');
    let json = await response.json();
    return json;
  }
}