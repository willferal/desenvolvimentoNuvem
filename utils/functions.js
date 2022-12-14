const path = require("path");
const { consultarCep } = require("correios-brasil");
module.exports = {
  upRender(fileName) {
    return path.join(__dirname, "..", "views", fileName + ".html");
  },
  async sedex(cep) {
    try {
      const address = await consultarCep(cep);
      return address;
    } catch (error) {
      return false;
    }
  },
  async calcularFrete(cep) {
    try {
      const address = await consultarCep(cep);
      console.log(address);
      return address.data;
    } catch (error) {
      return false;
    }
  },
};
