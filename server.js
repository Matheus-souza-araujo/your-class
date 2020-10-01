const express = require('express') //chamo o express para dentro dessa variavel
const nunjunks = require('nunjucks')
const routes = require("./routes")//puxando as rotas do routes.js

const server = express() //executa o express, variavel express vira uma função

server.use(express.urlencoded({ extended: true}))//faz funcionar o req.body
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")//configuração da template engine

nunjunks.configure("views", {
    express:server,
    autoescape:false,
    noCache: true
})

server.get("/",function(req, res){ //o servidor ira pegar barra e executar o request o response
    const about = {
        avatar_url:"https://avatars0.githubusercontent.com/u/66656989?s=460&u=08a7607ee987113c169bbb1faca5aa1f7bf07d03&v=4",
        name:"Matheus de Souza Araujo",
        role:"Estudante/Entusiasta de desenvolvimento web/Analista de suporte",
        description:'Programador full-stack, focado em aprender novas tecnologias em desenvolvimento web e mobile. Coloborador da <a href="https://wealthsystems.com.br/" target="_blanck">WealthSystems</a>',
        links: [
            {
                name:"Github", url:"https://github.com/Matheus-souza-araujo"
            },

            {
                name:"Twitter", url:"https://twitter.com/matheusgauxim"
            },

            {
                name:"Linkedin", url:"https://www.linkedin.com/in/matheus-souza-araujo/"
            },
        ]
    }


    return res.render("about", {about}) 
})

server.get("/portfolio",function(req, res){ //o servidor ira pegar barra e executar o request o response

    return res.render("portfolio", {items: videos}) 
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id //segue a ideia de estar retornando um true ou false
    })

    if(!video){
        return res.send("Video not found!")
    }

    return res.render("video", {item: video})
})

server.listen(5000, function(){//vai ficar ouvindo a porta 5000
    console.log("server is running")
}) 