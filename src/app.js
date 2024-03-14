require('dotenv').config()
const Rota = require("./Routes/rotas")
const express = require('express');
const app = express();

app.use(Rota);

app.listen(process.env.PORT ||3000,()=>{
    console.log('ai ze da manga');
});