const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/test.db'
})

const Users = db.define('user',{
    username:{
        type:Sequelize.STRING(30),
        allowNull:false,
        unique:true
    },
    password:{
        type:Sequelize.STRING(30),
        allowNull:false
    },
    email:{
        type:Sequelize.STRING(30)
    }
})

module.exports = {
    db,Users
}