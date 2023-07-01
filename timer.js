let audio = new Audio("music.mp3");

let inc = document.querySelector("#incrementer");
let dec = document.querySelector("#decrementer");

let num = document.querySelector("#timer");
let historyMain = document.querySelector("#history-main");

let timerHistoryData = [];

function increaser() {
  let timer = parseInt(num.textContent);
  timer += 1;
  num.textContent = timer + "s";
}
function decreaser() {
  let timer = parseInt(num.textContent);
  if (timer > 0) {
    timer -= 1;
    num.textContent = timer + "s";
  }
}


inc.addEventListener("mousedown", function () {
  intervalId = setInterval(increaser, 100);
});
inc.addEventListener("mouseup", function() {
  clearInterval(intervalId);
});

dec.addEventListener("mousedown", function () {
  intervalId = setInterval(decreaser, 100);
});
dec.addEventListener("mouseup", function() {
  clearInterval(intervalId);
});

// mouseup/down functionality for smart devices
inc.addEventListener("touchstart", function () {
  intervalId = setInterval(increaser, 100);
});
inc.addEventListener("touchend", function() {
  clearInterval(intervalId);
});

dec.addEventListener("touchstart", function () {
  intervalId = setInterval(decreaser, 100);
});
dec.addEventListener("touchend", function() {
  clearInterval(intervalId);
});

inc.addEventListener("click", increaser);
dec.addEventListener("click", decreaser);

function addHistory(){
  let li = document.createElement('p');
  li.innerHTML = `>> ${timerHistoryData[historyCounter]}s`;
  historyMain.appendChild(li);
  historyMain.scrollTo({ top: -historyMain.scrollHeight, behavior: "smooth" });
  historyCounter++;
}

let historyCounter = 0 ;

function startTimer() {
  document.querySelector(".start").disabled = true;
  let counter = parseInt(num.textContent);
  timerHistoryData.push(counter);

  let showCounter = setInterval(() => {
    if (counter == 0) {
      clearInterval(showCounter);
      setTimeout(() => {
        toShow.setAttribute("style", "visibility:hidden;");
        toHide.style.visibility = "visible";
      }, 300);
      num.textContent = 0;
      audio.pause();
      document.querySelector(".start").disabled = false;
      addHistory();
    }

    toShow.textContent = counter + "s";
    counter--;
  }, 1000);

  let toHide = document.querySelector("#main");
  let toShow = document.querySelector("#actual-timer");

  toHide.style.visibility = "hidden";
  toShow.setAttribute("style", "visibility:visible;");
  toShow.textContent = "";
  audio.play();
}
