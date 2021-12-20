const {Sequelize} = require("sequelize")

const sequelize = new Sequelize('projeto_node', 'root', '', {
    host:'localhost',
    dialect:"mysql"
})

try{
    sequelize.authenticate()
    console.log("Conectado ao BD")
}catch(erro){
    console.log('Não Foi possível conectar:' , erro)
}

module.exports = sequelize