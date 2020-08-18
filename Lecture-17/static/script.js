const socket = io()

// setTimeout(()=>{
//     console.log('Connected '+socket.id)
// },1000)

socket.on('successfull',(data)=>{
    console.log(data.msg+' ' + socket.id)
})

socket.on('click-success',()=>{
    console.log('Click Success')
})

$(()=>{
    $('#btn').click(()=>{
        socket.emit('btn-clicked')
    })
})