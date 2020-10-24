module.exports =  {
    age:function (timestamp){
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

    grau:function(type){
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

        },

    date: function(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },

    ano: function(blood){
        if (blood == 5){
            return "5º ano do fudamental"
        }

        if (blood == 6){
            return "6º ano do fudamental"
        }

        if (blood == 7){
            return "7º ano do fudamental"
        }

        if (blood == 8){
            return "8º ano do fudamental"
        }

        if (blood == 9){
            return "9º ano do fudamental"
        }

        if (blood == 1){
            return "1º ano do ensino médio"
        }

        if (blood == 2){
            return "2º ano do ensino médio"
        }

        if (blood == 3){
            return "3º ano do ensino médio"
        }
    }
}

