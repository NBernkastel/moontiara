let prog = document.querySelector(".progress-bar")
let mn = document.querySelector(".main")
let start = Date.now()
prog.style.visibility = 'hidden'
let timer = setInterval(function() {

    let timePassed = Date.now() - start;
    if (timePassed >= 3500) {
        prog.style.visibility = 'hidden'
        mn.style.opacity = (timePassed-3500) / 10 + '%'
    }
    if (timePassed >= 7000){
        clearInterval(timer)
        return
    }
},20)
let i = 1
let card = document.querySelector(".card")
let timer2 = setInterval(function() {
    if (i > 100){
        clearInterval(timer2)
        return
    }
    card.style.left = i + '%'
    i += 0.005
},1)