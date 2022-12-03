const express =  require("express");
const app = express();

  app.get("/", function(req,res){
    console.log(__dirname)
    res.sendFile(__dirname + "/login.html");
  });

  app.get("/tvs",function(req,res){
    console.log(__dirname)
    res .sendFile(__dirname + "/tv.html")
  });

  app.get("/smartphones",function(req,res){
    console.log(__dirname)
    res .sendFile(__dirname + "/smartphones.html")
  });

  app.get("/moda",function(req,res){
    console.log(__dirname)
    res .sendFile(__dirname + "/moda.html")
  });

  app.get("/carrinho",function(req,res){
    console.log(__dirname)
    res .sendFile(__dirname + "/carrinho.html")
  });

  app.get("/ofertas",function(req,res){
    console.log(__dirname)
    res .sendFile(__dirname + "/paginaOfertas.html")
  });

  app.get("/suporte",function(req,res){
    console.log(__dirname)
    res .sendFile(__dirname + "/suporte.html")
  });

  app.get("/inicio",function(req,res){
    console.log(__dirname)
    res .sendFile(__dirname + "/inicio.html")
  });

  app.get("/tv",function(req,res){
    console.log(__dirname)
    res .sendFile(__dirname + "/tv.html")
  });
  app.get("/tvs/:marca",function(req,res){
    switch(req.params.marca) {
    case 'samsung':
    res.redirect('https://www.casasbahia.com.br/smart-tv-50-uhd-4k-samsung-50au7700-processador-crystal-4k-tela-sem-limites-visual-livre-de-cabos-alexa-built-in-controle-unico-55021049/p/55021049?utm_medium=Cpc&utm_source=GP_PLA&IdSku=55021049&idLojista=10037&tipoLojista=1P&&utm_campaign=gg_pmax_core_elte_apostas&gclid=EAIaIQobChMIrbTk5tnZ-wIVCjORCh1evgDDEAQYASABEgJyu_D_BwE&gclsrc=aw.ds');
    break;
    case 'lg':
    res.redirect('https://www.casasbahia.com.br/smart-tv-50-lg-4k-uhd-50uq8050-wifi-bluetooth-hdr-nvidia-geforce-now-thinq-ai-smart-magic-google-alexa-55051821/p/55051821?utm_medium=Cpc&utm_source=GP_PLA&IdSku=55051821&idLojista=10037&tipoLojista=1P&&utm_campaign=gg_pmax_core_elte_apostas&gclid=EAIaIQobChMI3ITWgNrZ-wIVSRZMCh21JgUZEAQYASABEgKDN_D_BwE&gclsrc=aw.ds');
    break;
    }
    });
    
    

  app.listen(8081,function(){console.log("servidor rodando");});


module.exports = app;