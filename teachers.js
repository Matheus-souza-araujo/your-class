const fs = require('fs')
const data = require('./data.json')
const { age } = require("./utils")

//show
exports.show = function(req, res){
    // req.params
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send("Teacher not found")
    

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        acompanhamento: foundTeacher.acompanhamento.split(","),//split transforma a string em array
        created_at:new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),//foi necessario instalar: "npm i intl"
    }

    return res.render("teachers/show", { teacher })
}
//create
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
    const id =Number(data.teachers.length + 1)


    data.teachers.push({
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

        return res.redirect("/teachers")
    })//JSON.stringify serve para transformar nosso objeto em JSON, o 2 é para dar 2 espaçamentos e quebrar a linha


}
