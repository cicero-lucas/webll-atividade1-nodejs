require('dotenv').config()
const Rota = require("./Routes/rotas")
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.use(Rota);


app.listen(process.env.PORT ||3000);