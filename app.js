require('dotenv').config();
const express = require("express");
const app = express();
const router = require('./Routes/router')
require("./db/connection")
const cors = require("cors");
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(router)


app.listen(PORT, () => {
    console.log(`Server started at Port no ${PORT}`)
})