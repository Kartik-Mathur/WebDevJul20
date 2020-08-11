const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

let todo = []
app.set('view engine','hbs')

app.use('/',express.static(__dirname + '/static'))

app.get('/todo',(req,res)=>{
    if(req.query.mode == 'json'){
        return res.send(todo)
    }
    res.render('todos',{
        todo
    })
})

app.post('/todo',(req,res)=>{

    // try{
        console.log(req.body)
        todo.push({
            name:req.body.name,
            id:req.body.priority
        })
    // }
    // catch(error){
        // console.log(error.message)
    // }
    // res.send('success')
    res.redirect('/todo')
})

app.listen(4444,()=>{
    console.log('Server started at http://localhost:4444')
})