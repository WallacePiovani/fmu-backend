import http from 'http';

http.createServer((req, res) => {
    res.end('Conectado!!');
}).listen(8080)