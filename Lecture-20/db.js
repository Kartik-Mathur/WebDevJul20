const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/test.db'
})

const Users = db.define('user',{
    username:{
        type:Sequelize.STRING(30),
    },
    password:{
        type:Sequelize.STRING(30),
    },
    email:{
        type:Sequelize.STRING(30)
    },
    fbId:{
        type:Sequelize.STRING(30)
    },
    fbToken:{
        type:Sequelize.TEXT
    }
})

module.exports = {
    db,Users
}