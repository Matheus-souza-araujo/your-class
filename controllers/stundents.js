const fs = require('fs')
const data = require('../data.json')

//create
exports.create = function (req, res){
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

        return res.redirect("/students/create")
    })//JSON.stringify serve para transformar nosso objeto em JSON, o 2 é para dar 2 espaçamentos e quebrar a linha


}