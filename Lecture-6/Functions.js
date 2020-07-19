// First way to create functions
function add(a,b,c=20){
    console.log(a+b+c)
    return a+b+c
}

add(10,12)
add(10,22)
console.log(typeof add)

// String
// Number
// Undefined
// Object
// Function
// Boolean

// Second way to create functions
let fun = function sub(a,b){
    console.log("After Subtraction ",a-b)
}

fun(10,5)

// Third way to create functions
let fun1 = function(a,b){
    console.log("After Subtraction in Fun1 ",a-b)
}

fun1(10,5)
console.log(fun1)

function Fun(){

    function innerFun(){
        console.log('We are inside innerFun')
    }
    return innerFun
}

x = Fun()
x()

// Pass by value and Pass by Reference
function Value(a,b,c){ // By value
    c = a+b
}

a = 10
b = 20
let c;

Value(a,b,c)
console.log(c)

// Pass by reference
function Reference(arr){ 
    arr[0] = arr[1]+arr[2]
}

let arr = [1,2,3]
Reference(arr)
console.log(arr[0])