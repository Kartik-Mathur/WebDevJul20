const fs = require('fs')
const path = require('path')
const F1 = path.join(__dirname,'inp1.txt')
const F2 = path.join(__dirname,'inp2.txt')
const F3 = path.join(__dirname,'output.txt')

let ans 
fs.readFile(
    F1,
    (err,data)=>{
        if(err) throw err
        ans = data.toString().split('\n')
        // console.log(ans)
        fs.readFile(F2,(err,data)=>{
            if(err) throw err

            ans = ans.concat(data.toString().split('\n'))
            // console.log(ans)
            ans.sort((a,b)=>a-b)

            let finalans = ans.join('\n')

            fs.writeFile(F3,finalans,(err)=>{
                if(err) throw err
                console.log('Everything Done!')
            })
        })
    }
)