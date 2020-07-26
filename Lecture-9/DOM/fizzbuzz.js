window.onload = function(){
    const inp = document.getElementById('inp')
    const list = document.getElementById('list')
    const btn = document.getElementById('btn')

    btn.onclick=function(){
        // console.log(inp.value)
        // console.log(typeof inp.value)
        let x = inp.value
        x = parseInt(x)
        // console.log(typeof x)
        // list.innerHTML = ""
        // let str = ""
        for(let i = 1 ; i <= x ; i++){
            // list.innerHTML = list.innerHTML + `<li>${i}</li>`
            // str = str + `<li>${i}</li>`
            let str = ""
            if(i%3 == 0)
                str += 'Fizz'
            if(i%5 == 0)
                str += 'Buzz'
            if(str == '')
                str = i
            let li = document.createElement('li')
            li.innerText = str
            list.appendChild(li)
        }
        // list.innerHTML = str
    }
}