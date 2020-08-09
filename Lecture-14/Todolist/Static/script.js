$(()=>{
    $('#btn').click(()=>{
        let name = $('#name').val()
        let id = $('#id').val()
        console.log('Hello',name,id)
        $.post('/hi',
        {
            name,
            id
        },
        (data)=>{
            // console.log('done')
            if(data == "Success")
                $('#show').text('Form submitted Successfully')
            else{
                $('#show').text('There is Some Error')
                
                // console.log('')
            }
        })
    })
})