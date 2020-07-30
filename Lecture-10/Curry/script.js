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