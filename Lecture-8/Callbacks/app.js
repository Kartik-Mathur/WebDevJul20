// Promises - Easy way to write callbacks, Linear code
// function downloadFile(url,downloaded){
//     console.log(`Starting the downloading from ${url}`)
//     setTimeout(function(){
//         let path = url.split('/').pop()
//         downloaded(path)
//     },4000)
// }
///////////////////////////////// Promise Basics ///////////////////////////////
// function Hello(){
//     console.log("Hello")
// }

// let x = new Promise(function(resolve,reject){
//     console.log('We are learning Promises')
//     setTimeout(function(){
//         Hello()
//         resolve()
//         Hello()

//     },3000)
// })

// console.log("We are going to run .then on promise object x")
// // setTimeout(function(){ 
//     x.then(function(){
//         console.log("Calling Resolve Function")
//     })
//     .catch(function(error){
//         console.error(error.message)
//     })
// // },5000)

// console.log("We have finished .then on promise object x")

///////////////////////////////// !Promise Basics ///////////////////////////////
function downloadFile(url){
    return new Promise(function(resolve,reject){
        console.log(`Starting the downloading from ${url}`)
        if(!url.startsWith('http')){
            throw new Error("Wrong URL")
        }
        setTimeout(function(){
            let path = url.split('/').pop()
            resolve(path)
        },4000)
    })
}

function compressFile(path){
    return new Promise(function(resolve,reject){
        if(-1 == ['mp3','ogg'].indexOf(path.split('.')[1])){
            throw new Error("Only mp3 and ogg formats are supported")
        }
        console.log('Starting the Compression of',path)
        setTimeout(function(){
            let compressedPath = path.split('.')[0] + '.zip'
            resolve(compressedPath)
        },4000)   
    }) 
}

function uploadFile(compressedPath){
    return new Promise(function(resolve,reject){
        console.log('Starting the uploading of',compressedPath)
        setTimeout(function(){
            let uploadedPath = `http://localsystem/${compressedPath}`
            resolve(uploadedPath)
        },3000)
    })
}
// Using Arrow Functions////////////////////////////
// function downloadFile(url){
//     return new Promise((resolve,reject)=>{
//         console.log(`Starting the downloading from ${url}`)
//         if(!url.startsWith('http')){
//             throw new Error("Wrong URL")
//         }
//         setTimeout(()=>{
//             let path = url.split('/').pop()
//             resolve(path)
//         },4000)
//     })
// }

// function compressFile(path){
//     return new Promise((resolve,reject)=>{
//         if(-1 == ['mp3','ogg'].indexOf(path.split('.')[1])){
//             throw new Error("Only mp3 and ogg formats are supported")
//         }
//         console.log('Starting the Compression of',path)
//         setTimeout(()=>{
//             let compressedPath = path.split('.')[0] + '.zip'
//             resolve(compressedPath)
//         },4000)   
//     }) 
// }

// function uploadFile(compressedPath){
//     return new Promise((resolve,reject)=>{
//         console.log('Starting the uploading of',compressedPath)
//         setTimeout(()=>{
//             let uploadedPath = `http://localsystem/${compressedPath}`
//             resolve(uploadedPath)
//         },3000)
//     })
// }

downloadFile('http://abc.com/song.mp4')
    .then(compressFile)
    .then(uploadFile)
    .then(()=>{
        console.log("All Done")
    })
    .catch(function(error){
        console.log(error.message)
    })


// downloadFile('http://abc.com/song.mp3')
//     .then(function(path){
//         console.log('File download Completed as',path)
//         compressFile(path)
//             .then(function(compressedPath){
//                 console.log('File Compressed as',compressedPath)
//                 uploadFile(compressedPath)
//                     .then(function(uploadedPath){
//                         console.log('File Uploaded at',uploadedPath)
//                         console.log("Everything Done!")
//                     })
//             })
//     })
    
console.log("Rest of the code")
// CallBacks - Hard way to write async code in sync manner, Nested Code
// function downloadFile(url,downloaded){
//     console.log(`Starting the downloading from ${url}`)
//     setTimeout(function(){
//         let path = url.split('/').pop()
//         downloaded(path)
//     },4000)
// }

// function compressFile(path,compressed){
//     console.log('Starting the Compression of',path)
//     setTimeout(function(){
//         let compressedPath = path.split('.')[0] + '.zip'
//         compressed(compressedPath)
//     },4000)    
// }

// function uploadFile(compressedPath,uploaded){
//     console.log('Starting the uploading of',compressedPath)
//     setTimeout(function(){
//         let uploadedPath = `http://localsystem/${compressedPath}`
//         uploaded(uploadedPath)
//     },3000)
// }

// downloadFile('http://abc.com/song.mp3',function(path){
//     console.log('File downloaded Successfully as',path)
//     compressFile(path,function(compressedPath){
//         console.log('File Compressed as',compressedPath)
//         uploadFile(compressedPath,function(uploadedPath){
//             console.log('File Uploaded at',uploadedPath)
//             console.log("Everything Done!")
//         })
//     })
// })
