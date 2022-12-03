const path = require("path");
const { consultarCep } = require("correios-brasil");
module.exports = {
  upRender(fileName) {
    return path.join(__dirname, "..", "views", fileName + ".html");
  },
  async sedex(cep) {
    try {
      const address = await consultarCep(cep);
    } catch (error) {
      return false;
    }

    return address;
  },
};
