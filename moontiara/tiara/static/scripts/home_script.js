let prog = document.querySelector(".progress-bar")
let mn = document.querySelector(".main")
let start = Date.now()
prog.style.visibility = 'hidden'
let timer = setInterval(function () {

    let timePassed = Date.now() - start;
    if (timePassed >= 3500) {
        prog.style.visibility = 'hidden'
        mn.style.opacity = (timePassed - 3500) / 10 + '%'
    }
    if (timePassed >= 7000) {
        clearInterval(timer)
        return
    }
}, 20)
let x = 15 +Math.random() * 55
let y = 15 +Math.random() * 65
var touchX = false
var touchY = false
let Xspeed = 0.05
let Yspeed = 0.05
let card = document.querySelector(".card")
let timer2 = setInterval(function () {
    if (x>90 || x < 0){
        Xspeed *= -1
    }
     if (y>80 || y < 0){
        Yspeed *= -1
    }
    x += Xspeed
    y += Yspeed
    card.style.left = x + '%'
    card.style.top = y + '%'
}, 1)