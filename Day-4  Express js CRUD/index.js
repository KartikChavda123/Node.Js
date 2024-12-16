const express = require("express");
const port = 7001;

const app = express();

let students = [];

app.set("view engine", "ejs");
app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.render("index", { students })
});

app.post("/addData", (req, res) => {
    const lastId = students.length > 0 ? parseInt(students[students.length - 1].id) : 0;
    req.body.id = String(lastId + 1);
    students.push(req.body);
    res.redirect("/");
});

app.get("/deleteData", (req, res) => {
    let deleteData = students.filter((e) => e.id !== req.query.id);
    students = deleteData;
    res.redirect("/");
});

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port :" + port);
});