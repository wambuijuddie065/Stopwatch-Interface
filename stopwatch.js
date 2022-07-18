const timer = document.getElementById('time');
const startButton=document.getElementById('startbtn');
const stopButton=document.getElementById('stopbtn');
const resetButton=document.getElementById('resetbtn');

 startButton.addEventListener("click",()=>{
    alert("Stopwatch has started");
  });
stopButton.addEventListener("click",()=>{
  alert("Stopwatch has stopped");
});
resetButton.addEventListener("click",()=>{
  alert("Stopwatch has been reset");
});

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}
function duration (){
  let dur = 0;
  
  durationCount = (stopCount - startCount)/1000;

  if(preDuration === 0) {
      
      preDuration = durationCount
  }else{
      
      durationCount+=preDuration;
  }
  if(durationCount > 60){
      dur = durationCount / 60;
      return (Number(dur.toFixed(1))+" Minutes");
  }else{

      return (Number(durationCount.toFixed(1)) + " Seconds");
  }
};