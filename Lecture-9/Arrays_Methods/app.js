let arr = [1,2,3,4,5,6,7,8,9]

// arr = arr.map((i,indx,arr1)=>{
//     // console.log(indx)
//     // console.log(arr1)
//     return (i**3)
// })
console.log(arr)

// arr = arr.filter((i)=>{
//     return (i%2 != 0)
// })

let sum = arr.reduce((accum,val,indx,arr1)=>{
    console.log(indx)
    console.log(arr1)
    return accum+val
})

console.log(sum)

arr = [1,1,12,23,34,235,24,242,423,4,2345,346,457,56,756,63,5,23,4,6,45,756,85,74,56,3,534,6,45,756,8,567,45,63,5,34,6,457,46,8,67,6,2,45,23,56,357,46]
arr.sort((a,b)=>{
    console.log("Compairing ",a," and ",b)
    return (b-a)
})
console.log(arr)

arr = [{a:1},{a:2},{a:3}]
arr.sort((x,y)=>{
    return (y.a-x.a)
})
console.log(arr)