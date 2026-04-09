const http = require('http');
const { constrainedMemory } = require('process');

const port = 8080

const server = http.createServer((req, res) => {
    if(req.url == '/home') {
        res.writeHead(200, {"Content-Type":"text-html"});
        res.end("<h1>Home page</h1>");
    }

    if(req.url == '/users') {
          const users = [
            {
                name: 'Mateus',
                email: 'mateus@eml'
            }
          ]
    }
});

server.listen(port, () => console.log(`Rodando n aporta ${port}!`));
