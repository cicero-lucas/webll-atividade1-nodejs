const express = require('express');
const Controlers = require('../Controllers/dados');
const midedleware = require('../Middleware/midedleware');

const Rota= express.Router();

Rota.get('/',Controlers.home)
Rota.get('/laboratorio/todos',midedleware.horarioFucAPI,Controlers.getDados);
Rota.get('/laboratorio/relatorio',midedleware.horarioFucAPI,Controlers.gerarRelatorio);
Rota.post('/laboratorio/todos/novo',midedleware.horarioFucAPI,midedleware.dadosEnviados,Controlers.PostDados);


module.exports=Rota
