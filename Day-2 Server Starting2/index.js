const http = require("http");
const port = 2009;

const handeler = (req,res) => {
    res.write("<h1> server started");
    res.end();
}

const server = http.createServer(handeler);

server.listen(port, (err)=> {
    err ? console.log("err") : console.log("server started on port :" + port);
});