const express = require('express');
const app = express();
const cors = require('cors');
const DbConnect = require('./dbconnect')

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello MThree, again");
})

app.get("/helloMark", (req, res) => {
    res.send("Hello Mark");
})

app.get("/consultants", async (req, res) => {
    let data = await DbConnect.findAllConsultants();
    let results = {
        consultants: data
    }
    res.send(results);
})


app.listen(7777, () => console.log("Listening at 7777"));