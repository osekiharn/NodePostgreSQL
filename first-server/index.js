const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/hoge') {
    const obj = { 1: 'one', 2: 'two' };
    res.setHeader('Content-Type', 'application/json');

    res.write(JSON.stringify(obj));

    res.end();
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`);
});
