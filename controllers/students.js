const fs = require('fs')
const data = require('../data.json')
const { age, grau, date } = require("../utils")
const Intl = require('intl')


exports.index = function(req, res) {
    return res.render('students/index', { students: data.students })
}
//show
exports.show = function(req, res){
    // req.params
    const { id } = req.params

    const foundStudent = data.students.find(function(student){
        return student.id == id
    })

    if(!foundStudent) return res.send("Student not found")
    

    const student = {
        ...foundStudent,
        age: age(foundStudent.birth),
        grau: grau(foundStudent.blood),
    }

    return res.render("students/show", { student })
}

//create
exports.create = function(req,res){
    return res.render('students/create')
}

//post
exports.post = function(req, res){
    const keys = Object.keys(req.body)//tranforma nossos dados em um array de chaves

    for(key of keys){
        if (req.body[key] == ""){//mesma coisa que fazer req.body.avartar_url, e vai fazendo todas no for
            return res.send('Please, fill all files')
        }    
    }

    let {avatar_url, birth, name, blood, acompanhamento, type} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id =Number(data.students.length + 1)


    data.students.push({
        id,
        name,
        avatar_url,
        birth,
        blood,
        type,
        acompanhamento,
        created_at
    })//vai adicionar o req.body no nosso array

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/students")
    })//JSON.stringify serve para transformar nosso objeto em JSON, o 2 é para dar 2 espaçamentos e quebrar a linha


}

//edit
exports.edit = function(req,res) {

    const { id } = req.params

    const foundStudent = data.students.find(function(student){
        return student.id == id
    })

    if(!foundStudent) return res.send("Student not found")

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth)
    }

    return res.render('students/edit',{ student })
}

//put
exports.put = function(req, res) {
    const { id } = req.body
    let index = 0

    const foundStudent = data.students.find(function(student, foundIndex){
        if (id == student.id){
            index = foundIndex
            return true
        }
        
    })

    if(!foundStudent) return res.send("Student not found")

    const student = {
        ...foundStudent,
        ...req.body,
        birth:Date.parse(req.body.birth),
        id: Number (req.body.id)
    }

    data.students[index] = student

    fs.writeFile("data.json",JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Write error!')

        return res.redirect(`/students/${id}`)
    })


}

//delete
exports.delete = function(req, res){
    const { id } = req.body

    const filteredStudents = data.students.filter(function(student){
        return student.id != id
    })

    data.students = filteredStudents

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/students")
    })
}