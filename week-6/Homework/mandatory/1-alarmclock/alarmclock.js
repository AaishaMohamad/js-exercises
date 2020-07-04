var timeInSeconds=10;
var alarmInterval;

function setAlarm() {
  clearInterval(alarmInterval);
  var inputField=document.getElementById("alarmSet");
  timeInSeconds=inputField.value;
  alarmInterval=setInterval(checkAlarm, 1000);
}


function checkAlarm(){
  timeInSeconds= timeInSeconds-1;
  if(timeInSeconds===0){
   clearInterval(alarmInterval);
   playAlarm();
  }
  updateTimeRemaining();
}

function updateTimeRemaining(){
  var timeRemainingField=document.getElementById("timeRemaining");
  timeRemainingField.innerText="Time Remaining: 00:"+timeInSeconds;
}



// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
