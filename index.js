const express = require("express"); // Importando o express
const app = express(); // Iniciando o express

app.get("/", function (req, res) {
    res.send("Bem vindo ao meu site!");
});

app.get("/blog/:artigo?", function (req, res) {
    var artigo = req.params.artigo;

    if (artigo) {
        res.send("Artigo:" + artigo);
    } else {
        res.send("Bem vindo ao meu blog!: www.alissonsantana.com.br");
    }

    res.send("Bem vindo ao meu blog!");
});

app.get("/canal/youtube", function (req, res) {
    var canal = req.query["canal"];

    if (canal) {
        res.send(canal);
    } else {
        res.send("Nenhum canal fornecido!");
    }
});

app.get("/ola/:nome/:empresa", function (req, res) {
    // REQ = DADOS ENVIADOS PELO USUÁRIO
    // RES = RESPOSTA QUE VAI SER ENVIADA PARA USUÁRIO
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send(`Oi ${nome} do ${empresa} `);
});

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
});
