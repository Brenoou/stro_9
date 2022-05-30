module.exports = (app)=>{
    app.post('/atividades',async(req,res)=>{
        var dados = req.body
        //return console.log(dados)
        //conectar com o database
        const database = require("../config/database")()
        //importar o model atividades
        const atividades = require("../models/atividade")
        //gravar informações do formulário no database
        var gravar = await new atividades({
            data:dados.data,
            tipo:dados.tipo,
            entrega:dados.entrega,
            disciplina:dados.disciplina,
            instrucoes:dados.orientacoes,
            usuario:dados.id

        }).save()
        //recarregar
        res.render('atividade.ejs',{nome:dados.nome,id:dados.id})
    })
}