//Inclusão do módulo necessário
const http = require("http");

//define a porta para acesso à aplicação
const PORT = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-type": "text/html",
  });
  res.end("<h1>Bem-vindo SDC</h1><p>OpenShift NodeJS App</p>");
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em localhost:${PORT}`);
});
