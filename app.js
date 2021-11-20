const express = require("express")
const app = express();

const data = new Date();
const mensagemDoDia = require('./service.js');

    app.get('/', (req,res)=>{
        
        let dia = data.getDate();
        let mensagemEscolhida = mensagemDoDia.retornaFrase(dia);

        console.log(mensagemEscolhida)

        res.json({mensagem:mensagemEscolhida})
    })

app.listen(8080, ()=>{
    console.log(`Servidor Node iniciado em ${data}`);
})