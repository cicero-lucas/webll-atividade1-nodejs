const horarioFucAPI = (req,res,next) =>{

    const horaAtula = new Date().getHours();
    if(horaAtula<8 || horaAtula>=22){
        return res.status(403).send("Acesso a API permitido somente entre 08:00 e 17:00 volte depois");
    }
    next();
}

const dadosEnviados = (req,res,next) =>{
    const body=req.body;
    if((body.nome===undefined )|| (body.capacidade === undefined)){
       
        return res.status(403).send("O nome e a capacidade do laboratorio são dados obrigatorios");
    }
    next();
}


module.exports= {
    horarioFucAPI,
    dadosEnviados
};