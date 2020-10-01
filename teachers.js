const fs = require('fs')
const data = require('./data.json')
//create
exports.post = function(req, res){
    const keys = Object.keys(req.body)//tranforma nossos dados em um array de chaves

    for(key of keys){
        if (req.body[key] == ""){//mesma coisa que fazer req.body.avartar_url, e vai fazendo todas no for
            return res.send('Please, fill all files')
        }    
    }
    req.body.birth = Date.parse(req.body.birth)
    req.body.created_at = Date.now()

    data.teachers.push(req.body)//vai adicionar o req.body no nosso array

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/teachers")
    })//JSON.stringify serve para transformar nosso objeto em JSON, o 2 é para dar 2 espaçamentos e quebrar a linha


}
//update

//delete 
