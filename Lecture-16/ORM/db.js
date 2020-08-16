const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect:'sqlite',
    storage:__dirname + '/test.db'
})

const Tasks = db.define('task',{
    name:{
        type:Sequelize.STRING(50),
        allowNull:false
    },
    done:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    }
})

module.exports = {
    db,Tasks
}