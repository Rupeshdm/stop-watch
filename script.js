let startTime= 0;
let elapsedTime= 0;
let isRunning= false;
let timer=null;
let time= document.querySelector(".timer");

function start(){
    if(!isRunning)
    {
        startTime= Date.now()-elapsedTime;
        timer= setInterval(update,10);
        isRunning= true;
    }
}
function end(){
    if(isRunning)
    {
        clearInterval(timer);
        elapsedTime= Date.now()-startTime;
        isRunning= false;
    }
}
function reset(){
    clearInterval(timer);
    startTime= 0;
    elapsedTime= 0;
    isRunning= false;
    time.textContent= "00:00:00:00";
}
function update(){
    const currTime= Date.now();
    elapsedTime= currTime-startTime;
    let hours= Math.floor(elapsedTime/(1000*60*60));
    let mins= Math.floor(elapsedTime/(1000*60)%60);
    let secs= Math.floor(elapsedTime/1000%60);
    let millsecs= Math.floor(elapsedTime%1000/10);
    hours= String(hours).padStart(2,"0");
    mins= String(mins).padStart(2,"0");
    secs= String(secs).padStart(2,"0");
    millsecs= String(millsecs).padStart(2,"0");
    time.textContent= `${hours}:${mins}:${secs}:${millsecs}`;

}
