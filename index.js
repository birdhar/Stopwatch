let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
const strtBtn = document.getElementById('strtBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const runBtn = document.getElementById('runBtn');
const counting = document.querySelector('.counting');

let total = 0;
let timer ;

// setInterval(setTime, 1000);

function pad(val) {

    let valString = val + '';

    if (valString.length < 2) {
        return '0' + val;
    } else {
        return val;
    }
}

function setTime() {
    total++;
    minutes.innerHTML = pad(parseInt(total/60));
    seconds.innerHTML = pad(total%60);

    min = pad(parseInt(total/60));
    sec = pad(total%60);
}

function startCountinng() {
    timer = setInterval(setTime, 1000);
    strtBtn.hidden = true;
    counting.hidden = false;
    stopBtn.hidden = false;
    pauseBtn.hidden = false;
    runBtn.hidden = true;

}

function stopCounting() {
    clearInterval(timer);
    stopBtn.hidden = true;
    resetBtn.hidden = false;
    pauseBtn.hidden = true;
    console.log(min, sec, total);
    console.log(total);
}

function pauseCounting() {
    clearInterval(timer);
    stopBtn.hidden = true;
    pauseBtn.hidden = true;
    runBtn.hidden = false;
}


function resetCounting(params) {
    total = 0
    minutes.innerHTML = pad(0);
    seconds.innerHTML = pad(0);
    strtBtn.hidden = false;
    resetBtn.hidden = true;
}

function runCounting() {
    
}


strtBtn.onclick = startCountinng;
stopBtn.onclick = stopCounting;
pauseBtn.onclick = pauseCounting;
resetBtn.onclick = resetCounting;
runBtn.onclick = startCountinng;




