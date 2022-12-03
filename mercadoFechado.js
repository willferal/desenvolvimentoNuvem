const express = require("express");
const app = express();
const { upRender, sedex } = require("./utils/functions");
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(upRender("login"));
});

app.get("/smartphones", function (req, res) {
  res.sendFile(upRender("smartphones"));
});

app.get("/moda", function (req, res) {
  res.sendFile(upRender("moda"));
});

app.get("/carrinho", function (req, res) {
  res.sendFile(upRender("carrinho"));
});

app.get("/ofertas", function (req, res) {
  res.sendFile(upRender("paginaOfertas"));
});

app.get("/suporte", function (req, res) {
  res.sendFile(upRender("suporte"));
});

app.get("/inicio", function (req, res) {
  res.sendFile(upRender("inicio"));
});

app.get("/tvs", function (req, res) {
  res.sendFile(upRender("tvs"));
});

app.get("/tvs/:marca", function (req, res) {
  switch (req.params.marca) {
    case "samsung":
      res.redirect(
        "https://www.casasbahia.com.br/smart-tv-50-uhd-4k-samsung-50au7700-processador-crystal-4k-tela-sem-limites-visual-livre-de-cabos-alexa-built-in-controle-unico-55021049/p/55021049?utm_medium=Cpc&utm_source=GP_PLA&IdSku=55021049&idLojista=10037&tipoLojista=1P&&utm_campaign=gg_pmax_core_elte_apostas&gclid=EAIaIQobChMIrbTk5tnZ-wIVCjORCh1evgDDEAQYASABEgJyu_D_BwE&gclsrc=aw.ds"
      );
      break;
    case "lg":
      res.redirect(
        "https://www.casasbahia.com.br/smart-tv-50-lg-4k-uhd-50uq8050-wifi-bluetooth-hdr-nvidia-geforce-now-thinq-ai-smart-magic-google-alexa-55051821/p/55051821?utm_medium=Cpc&utm_source=GP_PLA&IdSku=55051821&idLojista=10037&tipoLojista=1P&&utm_campaign=gg_pmax_core_elte_apostas&gclid=EAIaIQobChMI3ITWgNrZ-wIVSRZMCh21JgUZEAQYASABEgKDN_D_BwE&gclsrc=aw.ds"
      );
      break;
  }
});
app.get("/cep", function (req, res) {
  res.sendFile(upRender("endereco"));
});
app.post("/cep", async function (req, res) {
  let cep = req.body.cep;
  const address = await sedex(cep);
  if (!address) {
    return res.send("não encontrado");
  }
  res.send(address.data);
});

app.listen(8081, function () {
  console.log("servidor rodando");
});

module.exports = app;
