const express = require("express");
const port = 1001;

const app = express();

let students = [
    {"id": "1", "name": "Kartik" , "subject": "RecatJs"},
    {"id": "2", "name": "Khushal" , "subject": "NextJs"},
    {"id": "3", "name": "Saurabh" , "subject": "NodeJs"},
]

app.set("view engine", "ejs");

app.get("/",(req,res)=> {
    res.render("index", {students});
});

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on port :"+ port);
});