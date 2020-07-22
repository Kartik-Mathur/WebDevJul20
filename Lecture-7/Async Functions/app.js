// function delay(n,f){
//     for(let i = 1 ; i <= n ; i ++){
//         let x = new Date().getTime()
//         while(new Date().getTime()<1000+x){}
//     }
//     f()
// }

function fun(){
    console.log('Hello There!')
}

// delay(100,fun)

setTimeout(function(){
    fun()
},5000)

let x = setInterval(function(){
    console.log('Interval Function is running')
},1000) 

setTimeout(function(){
    clearInterval(x)
},3000)