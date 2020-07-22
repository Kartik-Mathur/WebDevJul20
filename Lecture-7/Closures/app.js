function fun(){
    let x = 0
    function innerFun(){
        x++
        function innermostFun(){
            x++
            console.log(x)
        }
        return innermostFun
    }
    return innerFun
}

let f1 = fun()
let f2 = fun()

let f11 = f1()
let f12 = f1()
let f21 = f2()
let f22 = f2()

f11()
f11()
f12()
f12()
f11()

f21()
f22()

// function fun(){
//     let x = 0
//     function innerFun(){
//         x++
//         console.log(x)
//         // return x
//     }
//     return innerFun
// }

// let f1 = fun()
// let f2 = fun()
// console.log(f1)

// f1()
// f1()
// f1()
// f2()
// f2()
// f2()