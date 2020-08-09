const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine','hbs')
// app.set('views','myfolder')

let users = []
// app.use('/',express.static(__dirname+'/Static'))

app.get('/',(req,res)=>{
    res.render('tasks',{
        title:"Handlebars",
        users
    })
})

app.post('/hi',(req,res)=>{
    users.push({
        id:req.body.id || 0,
        name:req.body.name
    })
    // res.send('done')
    res.redirect('/')
})

app.listen(4444,()=>{
    console.log("Server started at http://localhost:4444")
})
