$(()=>{
    function refreshTodo(){
        $('#list').empty()
        $.get('/todo?mode=json',(data)=>{
            for(let i = 0 ; i < data.length ; i++){
                $('#list').append(
                    $('<li>').text(`${data[i].name} - ${data[i].id}`)
                )
            }
        })
    }
    refreshTodo()

    $('#btn').click(()=>{
        let taskname = $('#inp').val()
        let taskpriority = $('#priority').val()

        $.post('/todo',{
            name:taskname,
            priority:taskpriority
        },(data)=>{
            console.log('Done')
            refreshTodo()
        })
    })
})