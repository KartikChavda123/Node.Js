const express = require("express");
const port = 5003;

const app = express();

const db = require("./config/db");
const schema = require("./model/firstSchema");

app.use(express.urlencoded())

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    let data = await schema.find({});
    res.render("index", { data });
})

app.post("/addData", async (req, res) => {
    await schema.create(req.body)
        .then(data => {
            res.redirect("/")
        })
})


app.listen(port, (err) => {
    err ? console.log(err) : console.log("server strted on port :" + port);
});

