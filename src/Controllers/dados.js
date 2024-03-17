const fs = require('fs');
const pdfkit = require('pdfkit');
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
        const doc = new pdfkit();
        doc.pipe(fs.createWriteStream(`relatorio_laboratorio${cont}.pdf`));
        doc.font('Helvetica-Bold').fontSize(15).text('Relatório de Laboratórios', { align: 'center' }).moveDown(2);

        dados.forEach((value, index) => {
            doc.font('Helvetica').fontSize(13).text(`Nome: ${value.nome} Capacidade: ${value.capacidade}  Descrição: ${value.descrição}  Chave: ${(value.chave) ? value.chave: index}`).moveDown(1);
        });
        doc.end();

        res.download(`relatorio_laboratorio${cont}.pdf`, `relatorio_laboratorio${cont}.pdf`, (err) => {
            if (err) {
                console.error('Erro ao gerar o relatório:', err);
                return res.json('Download feito com sucesso');
            } else {
                console.log('Relatório gerado com sucesso.');
                return res.json('Download feito com sucesso');
            }
        });

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