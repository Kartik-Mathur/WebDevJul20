$(()=>{
    function refreshtodolist(){
        $('#list').empty()
        $.get('/todo',(data)=>{
            for(let i = 0 ; i<data.length ; i++){
                $('#list').append(
                    $('<li>').text(data[i])
                )
            }
        })
    }

    refreshtodolist()

    $('#btn').click(()=>{
        let val = $('#inp').val()
        $.get(`/addtodo?task=${val}`,(data)=>{
            if(data == 'Success'){
                refreshtodolist()
            }
        })
    })

})
