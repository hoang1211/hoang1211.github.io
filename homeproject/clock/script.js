// const clock = document.getElementById("thoi_gian");
// let hr = 0;
// let min = 0;
// let sec = 0;
// let stoptime = true;
// const lap = document.getElementById("lap");
// const startButton = document.getElementById("startButton");
// const start = () => {
//   if (stoptime == true) {
//     stoptime = false;
//     timesCycle();
//     startButton.textContent = "Stop";
//     startButton.classList.remove("btn-success");
//     startButton.classList.add("btn-warning");
//   } else {
//     stoptime = true;
//     startButton.textContent = "Continue";
//     startButton.classList.add("btn-success");
//     startButton.classList.remove("btn-warning");
//   }
// };
// const timesCycle = () => {
//   if (!stoptime) {
//     sec = parseInt(sec);
//     min = parseInt(min);
//     hr = parseInt(hr);

//     sec++;
//     if (sec == 60) {
//       min++;
//       sec = 0;
//     }
//     if (min == 60) {
//       hr++;
//       min = 0;
//       sec = 0;
//     }
//     if (sec < 10 || sec == 0) {
//       sec = "0" + sec;
//     }
//     if (min < 10 || min == 0) {
//       min = "0" + min;
//     }
//     if (hr < 10 || hr == 0) {
//       hr = "0" + hr;
//     }
//     clock.innerHTML = `<div><span id="gio">${hr}</span><span>Giờ</span></div>
//         <div><span id="phut">${min}</span><span>Phút</span></div>
//         <div><span id="giay">${sec}</span><span>Giây</span></div>`;

//     setTimeout("timesCycle()", 1000);
//   }
// };
// const reset = () => {
//   clock.innerHTML = `<div><span id="gio">00</span><span>Giờ</span></div>
//         <div><span id="phut">00</span><span>Phút</span></div>
//         <div><span id="giay">00</span><span>Giây</span></div>`;
//   stoptime = true;
//   hr = 0;
//   sec = 0;
//   min = 0;
//   document.getElementById("startButton").textContent = "Start";
//   lap.innerHTML = "";
// };
// const lapFunc = () => {
//   let li = document.createElement("li");
//   li.innerText = `${hr}:${min}:${sec}`;
//   lap.appendChild(li);
// };
class stopWatch {
  constructor(id) {
    this.clock = document.getElementById(id);
    this.stopTime = true;
    this.hr = 0;
    this.min = 0;
    this.sec = 0;
    this.startButton = document.getElementById("startButton");
    this.stopButton = document.getElementById("stopButton");
    this.lap = document.getElementById("lap");
    this.interval;
    this.time = 0;
  }
  showTime = () => {
    this.time += 1;
    this.timesCycle(this.time);
  };
  timesCycle = (times) => {
    this.hr = Math.floor(times / 3600);
    this.min = Math.floor((times - this.hr * 3600) / 60);
    this.sec = times - this.hr * 3600 - this.min * 60;
    let hours = `${this.hr}`.padStart(2, "0");
    let minutes = `${this.min}`.padStart(2, "0");
    let seconds = `${this.sec}`.padStart(2, "0");
    return (this.clock.innerHTML = `<div><span id="gio">${hours}</span><span>Giờ</span></div>
          <div><span id="phut">${minutes}</span><span>Phút</span></div>
          <div><span id="giay">${seconds}</span><span>Giây</span></div>`);
  };
  start = () => {
    this.interval = setInterval(this.showTime, 1000);
    this.startButton.classList.add("hide");
    this.startButton.classList.remove("show");
    this.stopButton.classList.add("show");
  };
  pause = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
      this.stopButton.textContent = "Continue";
      this.stopButton.classList.add("btn-success");
      this.stopButton.classList.remove("btn-warning");
    } else {
      this.interval = setInterval(this.showTime, 1000);
      this.stopButton.textContent = "Stop";
      this.stopButton.classList.add("btn-warning");
      this.stopButton.classList.remove("btn-success");
    }
  };

  reset = () => {
    this.clock.innerHTML = `<div><span id="gio">00</span><span>Giờ</span></div>
          <div><span id="phut">00</span><span>Phút</span></div>
          <div><span id="giay">00</span><span>Giây</span></div>`;
    this.stopTime = true;
    this.hr = 0;
    this.sec = 0;
    this.min = 0;
    this.startButton.classList.add("show");
    this.startButton.classList.remove("hide");
    this.stopButton.classList.add("hide");
    this.stopButton.classList.remove("show");
    this.stopButton.textContent = "Stop";
    this.stopButton.classList.add("btn-warning");
    this.stopButton.classList.remove("btn-success");
    this.lap.innerHTML = "";
    clearInterval(this.interval);
    this.interval = null;
    this.time = 0;
  };
  lapFunc = () => {
    let li = document.createElement("li");
    li.innerText = `${this.hr}:${this.min}:${this.sec}`;
    this.lap.appendChild(li);
  };
}
stopWatch = new stopWatch("thoi_gian");
