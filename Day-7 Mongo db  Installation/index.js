const express = require("express");
const port = 5002;

const app = express();

const db = require("./config/db");

app.listen(port,(err)=> {
    err ? console.log(err) : console.log("server strted on port :" + port);
});