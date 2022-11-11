const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("oie");
});

var port = 3001;

app.listen(port, function(){
    console.log(`app de exemplo escutando na porta https://localhost:${port}/`);
});


