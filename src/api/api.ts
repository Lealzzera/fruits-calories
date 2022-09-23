export const Api = {
  getFruits: async () => {
    try {
      let response = await fetch('http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json');
      let json = await response.json();
      return json;
    } catch (error) {
      return console.error(error);
    }
  }
}