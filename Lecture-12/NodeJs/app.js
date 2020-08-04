const https = require('https')
let url = 'https://wwwcat-fact.herokuapp.com/facts'

const request = https.get(url,(response)=>{
    // console.log(response.statusCode)
    if(response.statusCode == 200){
        let x = ""
        response.on('data',(data)=>{
            // console.log(data)
            x += data.toString()
        })
        response.on('end',()=>{
            console.log(x)
            let data = JSON.parse(x)
            console.log(data.all[0].text)
            console.log("Everything Done!")
        })
    }
    else{
        console.log("Error :",response.statusCode)
    }
})

request.on('error',(err)=>{
    console.log("Printing Error")
    console.log(`Error : ${err}`)
}) 

try{
    let x = 10
    let a = {}
    a.b = 100
    console.log(a.b)
}
catch{
    console.log('a doesnot contain b')
}