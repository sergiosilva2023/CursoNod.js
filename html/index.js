// instalei framework express... npm install express --save
// criar a aplicação app... 

const express = require("express")
const app = express()

// criar as rotas da app
app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
})
app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre a minha app")
})
app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!")
})
app.get("/ola/:cargo/:nome/:cor", function(req, res){
    res.send("<h1>Ola "+req.params.nome+"</h1>"+"<h2>Seu cargo e "+req.params.cargo+"</h2>"+"<h3>Sua cor favorita e "+req.params.cor+"<h/3>")
})

// esta linha abaixo tem de ser a última linha da aplicação
app.listen(8081, function(){
    console.log("Servidor a rodar na url http://localhost:8081")
})