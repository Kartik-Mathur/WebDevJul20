// let x = 10;
// let y = 5;
// if(x>5){
//     // console.log(y); //Not allowed to use y, if we are creating let in local scope
//     // after using it earlier inside the scope
//     let y = 10;
//     console.log(y);
// }
// else{
//     y = 20;
// }

// console.log(y);

// for(let i = 0 ; i < 10 ; i++){
//     console.log(i)
// }
// console.log(i)

// Understanding scope of var
let x = 10;
var y = 5;
if(x>5){
    var y = 10;
    console.log(y); //10
}
else{
    y = 20; 
}

console.log(y); // 10

function Fun(){
    console.log(y)
    var y = 50;
    console.log(y)
}

Fun()

console.log(y)

add(100,100)

function add(a,b){
    console.log(a+b)
}
var f;
f(100,200) // error

f = function(a,b){
    console.log(a+b)
}

f(100,200) // will work here