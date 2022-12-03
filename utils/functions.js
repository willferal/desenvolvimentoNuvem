const path = require("path");

module.exports = {
  upRender(fileName) {
    return path.join(__dirname, "..", "views", fileName + ".html");
  },
};
