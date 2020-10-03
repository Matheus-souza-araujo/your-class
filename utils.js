module.exports =  {
    age:
    
        function (timestamp){
        const today = new Date()
        const birthDate = new Date(timestamp)
         
        //19
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
    
        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate() ){
            age = age - 1
        }
        return age
    },

    grau:

        function(type){
            if (type == "EMC"){
                return "Ensino médio completo"
            }
            if(type == "ESC"){
                return "Ensino superior"
            }
            if(type == "ME"){
                return "Mestrado"
            }
            if(type == "DOU"){
                return "Doutorado"
            }

        }
}

