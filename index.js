const express = require("express");
const app = express();
app.use(express.json());

const port = PORT || 8080
app.listen(port, () => console.log("Escuchando en puerto " + port))
app.get("/", (req, res) => {
    res.json("hola")
})