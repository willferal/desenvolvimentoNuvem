const express =  require("express");
const app = express();

app.get("/",function(req,res){
    console.log(__dirname)
  res .sendFile(__dirname + "/TEST.HTML")
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
    res .sendFile(__dirname + "/tv.html")
  });
    app.get("/pesquisa",function(req,res){
      console.log(__dirname)
      res .sendFile(__dirname + "/tv.html")
    });
  app.listen(8081,function(){console.log("servidor rodando");});


module.exports = app;