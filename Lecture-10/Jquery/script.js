// window.onload  = (()=>{
    console.log(document.getElementById('inp'))
// })

// $(document).ready(()=>{
//     console.log(document.getElementById('inp'))
// })

$(()=>{
    console.log(document.getElementById('inp'))
    $('#div')
    .css('background-color','green')
    .css('color','orange')
    .append('Hello World! We are Back!')

    $('#list')
    .append(
        $('<li>').text('This is new list item')
    )

    console.log($('#inp1').attr('id','someid'))
})
