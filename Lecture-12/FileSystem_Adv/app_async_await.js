const fs = require('fs')
const path = require('path')
const util = require('util')

const F1 = path.join(__dirname,'inp1.txt')
const F2 = path.join(__dirname,'inp2.txt')
const F3 = path.join(__dirname,'output.txt')

let read = util.promisify(fs.readFile)
let write = util.promisify(fs.writeFile)

async function sort(){
    let f1 = await read(F1)
    let f2 = await read(F2)

    let data =f1.toString().split('\n')
    data =data.concat(f2.toString().split('\n'))
    data.sort((a,b)=>a-b)

    await write(F3,data.join('\n'))
    console.log('All Done')
}

sort()