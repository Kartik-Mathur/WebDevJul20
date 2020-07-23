function normalFun(){
    console.log(this)
}

let arrowFun = (i)=>{
    // console.log(this)
    return Math.sqrt(i)
}

let sqrt = i=>Math.sqrt(i)

let a = {
    k:1,
    l:normalFun,
    m:arrowFun
}
let b = {
    k:2,
    l:normalFun,
    m:arrowFun
}

a.l()
b.l()

a.m()
b.m()