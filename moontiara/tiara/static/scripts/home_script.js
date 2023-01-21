let prog = document.getElementById("52");
let im = document.getElementById("12");
im.style.visibility = 'hidden'
let bt = true;

function readAll() {
    let start = Date.now();
    if (bt) {
        bt = false
        setInterval(function () {
            let timePassed = Date.now() - start;
            if (prog.value >= prog.max) {
                clearInterval(timer);
                return;
            }
            prog.value = timePassed / 50;
            if (prog.value >= prog.max) {
                im.style.visibility = 'visible';
            }
        }, 20)
    }
}
