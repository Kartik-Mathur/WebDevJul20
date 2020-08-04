const fs = require('fs')
const path = require('path')

let data = 'We are appending more data'
console.log(__dirname)
fs.writeFile(
            path.join(__dirname,'abc.txt'),
            data,
            {
                encoding:'utf8',
                flag:'w'
            },
            (err)=>{
                if(err) throw err
                console.log('Done Successfully')
            })
fs.readFile(
    // __dirname + '/abc.txt',
    path.join(__dirname,'abc.txt'),
    {
        encoding:'utf8'
    },
    (err,data)=>{
        if(err) throw err
        console.log(data)
    }
)