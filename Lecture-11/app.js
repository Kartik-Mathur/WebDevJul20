const {add,subtract} = require('./add')

let x = subtract(30,20)
console.log(x) 
console.log(add(10,20))
// console.log(process.argv)
// console.log(process.argv.length)

function fizzBuzz(){
    let n = parseInt(process.argv[2])
    if(process.argv.length <= 2){
        n = 10
    }
    let cnt3=0,cnt5=0
    for(let i = 0 ; i < n ; i++){
        let str = ""

        if(cnt3 == 3){
            str += 'Fizz'
            cnt3 = 0
        }
        if(cnt5 == 5){
            str += 'Buzz'
            cnt5 = 0
        }
        if(str == '')
            str = i
        console.log(str)
        cnt3++,cnt5++ 
    }
}

// function fizzBuzz(){
//     let n = parseInt(process.argv[2])
//     if(process.argv.length <= 2){
//         n = 10
//     }
//     for(let i = 0 ; i < n ; i++){
//         let str = ""
//         if(i%3 == 0)
//             str += 'Fizz'
//         if(i%5 == 0)
//             str += 'Buzz'
//         if(str == '')
//             str = i
//         console.log(str)
//     }
// }
fizzBuzz()

// var obj = {
//     a: 10,
//     b: 'Kartik',
//     c: true
// }