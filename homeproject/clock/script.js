const clock = document.getElementById("thoi_gian");
let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;
const lap = document.getElementById("lap");
const startButton = document.getElementById("startButton");
const start = () => {
  if (stoptime == true) {
    stoptime = false;
    timesCycle();
    startButton.textContent = "Stop";
    startButton.classList.remove("btn-success");
    startButton.classList.add("btn-warning");
  } else {
    stoptime = true;
    startButton.textContent = "Continue";
    startButton.classList.add("btn-success");
    startButton.classList.remove("btn-warning");
  }
};
const timesCycle = () => {
  if (!stoptime) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hr++;
      min = 0;
      sec = 0;
    }
    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }
    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }
    clock.innerHTML = `<div><span id="gio">${hr}</span><span>Giờ</span></div>
        <div><span id="phut">${min}</span><span>Phút</span></div>
        <div><span id="giay">${sec}</span><span>Giây</span></div>`;

    setTimeout("timesCycle()", 1000);
  }
};
const reset = () => {
  clock.innerHTML = `<div><span id="gio">00</span><span>Giờ</span></div>
        <div><span id="phut">00</span><span>Phút</span></div>
        <div><span id="giay">00</span><span>Giây</span></div>`;
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
  document.getElementById("startButton").textContent = "Start";
};
const lapFunc = () => {
  let li = document.createElement("li");
  li.innerText = `${hr}:${min}:${sec}`;
  lap.appendChild(li);
};
