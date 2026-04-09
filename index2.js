import express from 'express';
import path from 'path';

const app = express ();

app.get('/', (req, res) => {
    // res.send -> manda uma resposta em texto  
    res.sendFile(path.resolve('./src/index.html'));
    // path.resolve -> transforma endereços relativos em absolutos
    // relativos -> ./src/index.html
    // absolutos -> C:/Users/Usuario/Desktop/Projeto/src/index.html
})

app.get('/contato', (req, res) => {
    res.sendFile(path.resolve('./src/contato.html'));
})

app.get('/servico', (req, res) => {
    res.sendFile(path.resolve('./src/servico.html'));
})

app.listen(8080, () =>{
    console.log('Servidor rodando na porta 8080')
})