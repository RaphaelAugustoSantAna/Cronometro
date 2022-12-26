"use strict";

let hour = 0;
let min = 0;
let sec = 0;

let tempo = 1000;
let crono;

function start() {
  crono = setInterval(() => {
    timer();
  }, tempo);
}

function pause() {
  clearInterval(crono);
}

function stop() {
  clearInterval(crono);
  hour = 0;
  min = 0;
  sec = 0;

  document.getElementById("counter").innerText = "00:00:00";

}

function timer() {
  sec += 1;
  if (sec == 60) {
    sec = 0;
    min += 1;
  }
  if(min == 60){
    min = 0;
    hour += 1;
  }
  let format =
    (hour < 10 ? "0" + hour : hour) +
    ":" +
    (min < 10 ? "0" + min : min) +
    ":" +
    (sec < 10 ? "0" + sec : sec);
  document.getElementById("counter").innerText = format;
}
