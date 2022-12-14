const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const { upRender, sedex, calcularFrete } = require("./utils/functions");
let smartphones = require("./__data__/smartphones");
let moda = require("./__data__/moda")
let tvs = require("./__data__/tvs")

app.use(express.urlencoded({ extended: false }));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  res.sendFile(upRender("login"));
});

app.get("/categoria/:categoria", function (req, res) {
  const categoria = req.params.categoria;
  if (categoria == "smartphones") {
    res.render("smartphones", { smartphones });
  } else if (categoria == "moda") {
    res.render("moda", { moda });
  } else if (categoria == "tvs") {
    res.render("tvs", { tvs });
  } else {
    res.redirect("/")
  }
});

app.get("/smartphones/criar", function (req, res) {
  res.render("addSmartphones");
})

app.get("/smartphones/editar/:id", function (req, res) {
  const id = req.params.id;
  const smartphone = smartphones.find(function (cel) {
    return cel.id == id;
  });
  res.render("editSmartphones", { smartphone });
})

app.get("/smartphones/deletar/:id", function (req, res) {
  const id = req.params.id;
  const smartphone = smartphones.find(function(cel){
    return cel.id == id;
  });
  res.render("deleteSmartphones", {smartphone});
})

app.post("/smartphones/criar", function (req, res) {

  const { model, price, description, name, imageUrl } = req.body;

  const newSmartphone = {
    id: smartphones.length,
    model, price, description, name, imageUrl
  };
  smartphones.push(newSmartphone);
  res.redirect("/categoria/smartphones");
})

app.post("/smartphones/editar/:id", function (req, res) {
  const id = req.params.id;
  const { model, price, description, name, imageUrl } = req.body;

  const newSmartphone = {
    id,
    model, price: Number(price), description, name, imageUrl
  };
  smartphones.forEach(function (cel, index) {
    if (cel.id == id) {
      smartphones[index] = newSmartphone;
    }
  });
  res.redirect("/categoria/smartphones");
})

app.post("/smartphones/deletar/:id", function (req, res) {
  const id = req.params.id;
  
  smartphones = smartphones.filter(
    function(cel){
      return cel.id != id;
    }
  )
  res.redirect("/categoria/smartphones");
})

app.get("/carrinho", function (req, res) {
  res.sendFile(upRender("carrinho"));
});

app.get("/frete", function (req, res) {
  res.render("frete");
});

app.post("/frete", async function (req, res) {
  let { cep } = req.body

  const address = await calcularFrete(cep);

  let frete = {
    msg: address.logradouro
  }

  res.send(address);
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
    return res.send("n??o encontrado");
  }

  res.render("mostrar", {
    address: address.data,
  });
});

app.get("/teste", function (req, res) {
  res.render("teste", { testando: 1000 });
});

app.listen(8084, function () {
  console.log("servidor rodando");
});

module.exports = app;
