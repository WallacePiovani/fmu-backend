import express from 'express';


const app = express ();
const port = 8080;

app.get ('/', (req,res) => {
    res.send ('<h1>Olá Mundo!</h1>')
})

app.get('/contato', (req, res) => {
    res.send('<h1 style="color: blue; text-align: center;">Contatos</h1>')
})

app.listen (port, () =>{
    console.log (`Servidor rodando na porta: ${port}`)
})  
