import http from 'http'
import fs from 'fs' 


let server = http.createServer((req,res) => {
    let rotaFinal
    let rota=req.url
    

    if (rota === '/'){
        rotaFinal='/index.html'
    }
    else{
        rotaFinal =`${req.url}.html`
    }
    
    fs.readFile(`./src${rotaFinal}`, (err,data) => {
        if(err){
            fs.readFile('./src/404.html', (err404, data404) => {
                if(err404){
                    res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'})
                    res.end('<h1>404 - Página Não Encontrada</h1>')
                }
                else{
                    res.end(data404)
                    //Data não é um texto é um buffer(lugar onde armazena informação) que representa os bytes do arquivo. É o conteúdo html em HEXADECIMAL.
                }
            })
            return
        }
        res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'})
        res.end(data)
    })
})

server.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
})