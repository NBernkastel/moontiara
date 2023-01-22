let prog = document.querySelector(".progress-bar")
let mn = document.querySelector(".main")
let start = Date.now()
let timer = setInterval(function() {

    let timePassed = Date.now() - start;
    if (timePassed >= 3500) {
        prog.style.visibility = 'hidden'
        mn.style.opacity = (timePassed-3500) / 50 + '%'
    }
},20)

