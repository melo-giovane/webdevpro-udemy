const { log } = require("console");
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8080;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url === '/' ? "index.html" : "request.url")

  const extName = String(path.extname(filePath)).toLowerCase()

  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'text/png',
  }

  const contentType = mimeTypes[extName] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if(err) {
      
    } else{
      res.writeHead()

    }
  })
});

server.listen(port, () => {
  console.log(`Ser ver is listening on port ${port}`);
});
