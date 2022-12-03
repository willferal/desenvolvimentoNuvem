module.exports = {
  upRender(fileName) {
    return path.join(__dirname, "views", fileName + ".html");
  },
};
