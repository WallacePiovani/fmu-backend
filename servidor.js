import express from 'express';

const app = express();
const port = 3000;


app.use(express.urlencoded({extended: true}));
//express.urlencoded -> Traduz os dados do formulário 
//extended: true -> Permite o uso de dados mais complexos, como objetos arrays, enquanto extended: false só permite dados simples, como strings e arrays.
// app.use -> Ativa todo os parâmetros do servidor
//Principais metodos utilizados no CRUD(Create, Read, Update, Delete)
//Create -> app.post() -> Enviar dados para o servidor 
//Read -> app.get(()) -> Ler dados do servidor
//Update -> app.put() -> Atualizar dados do servidor
//Delete -> app.delete() -> Deletar dados do servidor

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.post('/dados', (req, res) =>{
    const nome = req.body.nome;
    const idade = req.body.idade;


    res.send(`Dados recebido com sucesso! Nome: ${nome}, Idade: ${idade}`);
    console.log(`Dados recebido com sucesso! Nome: ${nome}, Idade: ${idade}`);
});

