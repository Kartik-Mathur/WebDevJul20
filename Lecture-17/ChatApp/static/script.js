const socket = io()

setTimeout(()=>{
    console.log('Connected '+socket.id)
},1000)

$(()=>{
    $('#chat').hide()

    $('#btn1').click(()=>{
        socket.emit('login',{
            name:$('#inp1').val()
        })

    })

    $('#btn').click(()=>{
        socket.emit('sending-msg',{
            msg:$('#inp').val()
        })
    })
    socket.on('recieved-msg',(data)=>{
        $('#list').append(
            $('<li>').text(data.name + ' said ' +data.msg)
        )
    })

    socket.on('login-success',()=>{
        $('#login').hide()
        $('#chat').show()
    })
})