const fs = require('fs');
const pdfRelarotio = require('pdfkit');
const dados= require('../models/model')
let cont=0

function home(req,res){
    return res.json({"ver laboratorios":"laboratorio/todos",
    "relatorio":"/laboratorio/relatorio",
    "Cadastra novo laboratorio":"/laboratorio/todos/novo"});
}

function getDados (req,res){
    return res.status(200).json(dados);
}


function gerarRelatorio(req, res) {
    try {
        const doc = new pdfRelarotio();
        res.setHeader('Content-Disposition', 'attachment; filename="relatorio.pdf"');
         res.setHeader('Content-Type', 'application/pdf');
  
        doc.text(JSON.stringify(dados), 50, 50);
  
        console.log("Relatório gerado com sucesso. Enviando resposta...");
        doc.pipe(res);
        doc.end();
        console.log("Relatório enviado!");

        cont++

    } catch (error) {
        console.error('Erro ao gerar o relatório:', error); 
    }
}


function PostDados (req,res){
    const novoLaboratorio = req.body;
    dados.push(novoLaboratorio);
    res.status(201).send('Laboratório cadastrado com sucesso.');
}




module.exports={
    home,
    getDados,
    PostDados,
    gerarRelatorio

  
}