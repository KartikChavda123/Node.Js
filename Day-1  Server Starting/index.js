const http = require("http");
const port = 2005;

const hndel = (req,res) => {
    res.write("<h1> server strted </h1>")
    res.end()
};

const server = http.createServer(hndel);

server.listen(port,(err)=>{
    err ? console.log("err"):console.log("server strated on port :" + port);
});