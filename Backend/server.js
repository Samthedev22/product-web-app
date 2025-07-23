//const express = require('express'); //old method

// Es modules mordern SYNTAX
import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("server is ready now");
});

app.listen(5000, () => {
    console.log("the Server started at http://localhost:5000 ")
})

eZlfXwoDYClF5X9A