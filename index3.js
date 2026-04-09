import express from 'express';

const app = express ();
const port = 8080;


const listaAluno = [
    {
        id: 1,
        nome: 'Maria',
        curso: 'ads'

    },
    {
        id: 2,
        nome: 'João',
        curso: 'Direito'
    },
    {
        id: 3,
        nome: 'Lucas',
        curso: 'Marketing'
    }
];

//res.json - é um metodo especializado que garante que o navegador entenda o dicionario listaAluno como um dado estruturado e não como texto.

app.get('/api/alunos',(req, res) =>{
    res.json(listaAluno); //dados vão chegar no formato JSON

})

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port} e enviando dados JSON para o servidor! API rodando em: http://localhost:${port}/api/alunos`);
})