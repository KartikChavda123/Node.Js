const express = require('express');
const port = 3001;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

let book = [
    {id: "1", bookName: "Don't Believe Everything You Think", author: "oseph Nguyen ", price: "190" },
    {id: "2", bookName: "The Power of Your Subconscious Mind", author: "Joseph Murphy ", price: "150" },
    {id: "3", bookName: "The Power of A Positive Attitude", author: "Roger Fritz", price: "140" },
    {id: "4", bookName: "You Can", author: "George Matthew Adams", price: "170" },
    {id: "5", bookName: "Why I Am an Atheist Letters & Jail Diary of Bhagat Singh", author: "Bhagat Singh", price: "180"},
    {id: "6", bookName: "Stop Overthinking", author: "Nick Trenton", price: "160"},
]
app.get("/", (req, res) => {
    res.render("index", { book });
});

app.post("/addData", (req, res) => {
    req.body.id = String(book.length + 1);
    book.push(req.body);
    res.redirect("/");
})

app.get("/deleteData", (req, res) => {
    let deleteRecord = book.filter((e) => e.id != req.query.id);
    book = deleteRecord;
    res.redirect("/");
});

app.get("/editData/:id", (req, res) => {
    let singleData = book.find((e) => e.id == req.params.id);
    res.render("edit", { singleData });
})

app.post("/updateData", (req, res)=>{
    console.log(req.body);
    book.map((e)=>{
        if(e.id == req.body.id){
            e.id = req.body.id;
            e.bookName = req.body.bookName;
            e.author = req.body.author;
            e.price = req.body.price;
        }
        else{
            e
        }
        res.redirect("/");
    })
    
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port :" + port);
})