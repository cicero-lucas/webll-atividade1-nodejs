const express = require('express');
const Controlers = require('../Controllers/dados')
const Rota= express.Router();

Rota.get('/lab',Controlers.getDados);
Rota.post('/lab',Controlers.PostDados);
Rota.put('/lab/:id',);
Rota.delete('/lab/:id',Controlers.deleteDados);

module.exports=Rota