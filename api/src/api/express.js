const express = require("express")
const {connection} = require("../db/connect");
const cors = require("cors");


const app = express();

app.use(express.json({limit:"50"}));

app.use(cors());


app.get("/allRoupas", (req, res) => {
    connection.query('SELECT * FROM roupas', (err, rows, fields) => {
        if (err) return console.error(err);

        res.json(rows);
    });
})

app.post("/addRoupas", (req, res) => {
    console.log(req.body);
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const cor = req.body.cor;
    const tamanho = req.body.tamanho;
    const preco = req.body.preco;
    const quantidade = req.body.quantidade;
    const marca = req.body.marca;
    const imagem = req.body.imagem;

    connection.query(`INSERT INTO roupas(nome_produto, descricao, cor, tamanho, preco, quantidade, marca, imagem) VALUES ('${nome}', '${descricao}', '${cor}', '${tamanho}', '${preco}', ${quantidade}, '${marca}', '${imagem}');`,(err, result) => {
    if (err) return console.log(err)
        console.log(result)
    })
})

app.listen(3000, () => console.log("Rodando na porta 3000"));