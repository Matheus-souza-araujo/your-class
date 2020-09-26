const express = require('express')
const routes = express.Router()//método rounter faz a variavel routes ser responsavel pelas rotas

routes.get('/', function(res, res){ //criando a rota
    return res.redirect("/teachers")
})

routes.get('/teachers', function(res, res){ //criando a rota
    return res.render("teachers/index")
})

routes.get('/', function(res, res){ //criando a rota
    return res.send("ok")
})


module.exports = routes //exportando as rotas