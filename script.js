function makeBubble(){
    var clutter = "";

for(var i = 1;i<=96;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector(".pbtm").innerHTML = clutter;
}


var timer = 60;
var score = 0;

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }

        else {
            clearInterval(timerint);
        }
    },1000)
}

function hitVal(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = rn;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

hitVal();
runTimer();

makeBubble();