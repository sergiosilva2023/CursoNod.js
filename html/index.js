const express = require("express")
const app = express()

// criar as rotas da app
app.get("/", function(req, res){
    res.send("Seja bem-vindo na minha aplicação!")
})
app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre a minha app")
})
app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!")
})

// esta linha abaixo tem de ser a última linha da aplicação
app.listen(8081, function(){
    console.log("Servidor a rodar na url http://localhost:8081")
})