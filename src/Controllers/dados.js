const dados= require('../models/model')

function getDados (req,res){
    return res.status(200).json(dados);
}
function putDados (req,res){
    return res.status(200).json(dados);
}
function PostDados (req,res){
   if(req.query){
        let myquery=req.query
        dados.push(myquery);
   }else if(req.body){
        let mybody=req.body
   }
}
function deleteDados (req,res){
    console.log(req.parems)
}


module.exports={
    getDados,
    PostDados,
    putDados,
    deleteDados
}