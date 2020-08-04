const https = require('https')
let url = 'https://wwwcat-fact.herokuapp.com/facts'
BigInt.onclick = function(){
    let city = $('#inp').val()
    let apikey = 'asdbasjdabdkba'
    let url = `https://weather.com/q=${city}&appid=${apikey}`
    https.get(url,(response)=>{
        
    })
}
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