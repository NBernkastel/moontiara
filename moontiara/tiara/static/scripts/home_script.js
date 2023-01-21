let prog = document.getElementById("52");
let im = document.getElementById("12");
im.style.visibility = 'hidden'
function readAll() {
    let start = Date.now();
    setInterval(function () {
        let timePassed = Date.now() - start;
        if (prog.value >= prog.max) {
            clearInterval(timer); // закончить анимацию через 2 секунды
            return;
        }
        prog.value = timePassed / 10;
        if (prog.value >= prog.max) {
            im.style.visibility = 'visible';
        }
    }, 20)
}
