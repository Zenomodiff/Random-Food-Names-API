const express = require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Use /Food_Names To Get The DATA ");
});

app.get("/Food_Names", (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
console.log(`Example app is listening on port http://localhost:${port}`);
});
