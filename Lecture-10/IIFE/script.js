var x = 'Hello'

!function(name){
    console.log(`Hello ${name}`)
}('Kartik Mathur')

;(function calculate(x,cl,ms,msi,mco){
    cl("Sqrt:",ms(x))
    cl("Sin:",msi(x))
    cl("Cos:",mco(x))
})(16,console.log,Math.sqrt,Math.sin,Math.cos);

function add(x){
    if(!x)
        return 0
    function addmore(res){
        if(!res){
            res=0
            return x
        }
        x+=res
        return addmore
    }
    return addmore
}

console.log(add(1)(2)(3)(4)(5)(6)())
console.log(add(1)(2)(3)(4)(5)())
console.log(add(1)(2)(3)(4)())
console.log(add(1)(2)(3)())
console.log(add(1)(2)())
console.log(add(1)())
console.log(add())