// let a = {
//     k:1,
//     _l:'Kartik',
//     m:true
// }
// var x = "Some Stirng"
// let b = Object.create(a)
// // let c = Object.create(b)

// function Fun(name,age){
//     this.name = name
//     this.age = age
// }

// x = new Fun("Kartik",12)
// y = new Fun("Jatin",15) 
function fun(name,age){
    console.log("Inside fun ", this)
    console.log(name,age)
    return "EXIT"
}

var a = {
    k:100,
    l:function(){
        console.log(this.k)
        console.log(this.m)
    },
    m:"Kartik"
}

a.l() // Implicit Binding

fun.call(a,"Kartik",12) // Will bind the function to this first argument as this,
// and will call the function immediately

let f = fun.bind(a)
let f1 = fun.bind(window) // call and bind are explicit binding
