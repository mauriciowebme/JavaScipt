const express = require ("express");
const app = express();

app.get("/", function ok (req, res){
  res.send("Rota principal")
});

app.get("/secundaria", function ok (req, res){
  res.send("Rota secundaria")
});

app.listen(8081, function(){
 console.log("Servidor rodando na URL: http://localhost:8081");
});
