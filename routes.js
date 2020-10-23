const express = require('express')
const routes = express.Router()//método rounter faz a variavel routes ser responsavel pelas rotas
const teachers = require('./controllers/teachers')
const students = require('./controllers/students')
//routes professores
routes.get('/', teachers.index)
routes.get('/teachers', teachers.index)
routes.get('/teachers/create', teachers.create)
routes.get('/teachers/:id', teachers.show)
routes.get('/teachers/:id/edit', teachers.edit)
routes.put('/teachers', teachers.put)
routes.delete('/teachers', teachers.delete)


//routes alunos
routes.get('/', students.index)
routes.get('/students', students.index)
routes.get('/students/create', students.create)
routes.get('/students/:id', students.show)
routes.get('/students/:id/edit', students.edit)
routes.put('/students', students.put)
routes.delete('/students', students.delete)


module.exports = routes //exportando as rotas