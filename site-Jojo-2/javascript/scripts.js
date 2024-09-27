const express = require('express');
const colecaoDeDados = require('./dados/dados');

const app = express();

app.get('/lista', (req, res) => {
    res.json(colecaoDeDados.colecaoDeDados);
});

let data = Date()
app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso na porta 8080", data)
})