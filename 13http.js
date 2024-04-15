const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("successfully logged into home");
  }
  if (req.url == "/about") {
    res.end("successfully logged into about page");
  }
  res.end(`
        <h1>Ooops!</h1>
        <p>we can't seem to find this page</p>
        <a href="/">back home</a>
    `);
});

server.listen(3003);
