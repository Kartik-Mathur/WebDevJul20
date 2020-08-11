const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',express.static(__dirname + '/static'))

const routes = {
    teachers: require('./routes/teacher').route,
    students: require('./routes/student').route
}

app.use('/mentors',routes.teachers)
app.use('/students',routes.students)

app.listen(4444,()=>{
    console.log('Server started at http://localhost:4444')
})