const express = require('express')
const routes = express.Router()//método rounter faz a variavel routes ser responsavel pelas rotas
const teachers = require('./teachers')

routes.get('/', function(res, res){ //criando a rota
    return res.redirect("/teachers")
})

routes.get('/teachers', function(res, res){ //criando a rota
    return res.render("teachers/index")
})

routes.get('/teachers/create', function(req,res){
    return res.render('teachers/create')
})

routes.get('/teachers/:id', teachers.show)
routes.post('/teachers', teachers.post)

routes.get('/members', function(res, res){ //criando a rota
    return res.send("members")
})


module.exports = routes //exportando as rotas