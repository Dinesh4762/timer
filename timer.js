let audio = new Audio("music.mp3");

let inc = document.querySelector("#incrementer");
let dec = document.querySelector("#decrementer");

let num = document.querySelector("#timer");

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
  // Start incrementing when the button is pressed and hold
  intervalId = setInterval(increaser, 50);
});

// Event listener for the mouseup event
inc.addEventListener("mouseup", function () {
  // Stop incrementing when the button is released
  clearInterval(intervalId);
});

dec.addEventListener("mousedown", function () {
  intervalId = setInterval(decreaser, 50);
});

dec.addEventListener("mouseup", function () {
  clearInterval(intervalId);
});

inc.addEventListener("click", increaser);

dec.addEventListener("click", decreaser);

function startTimer() {
  document.querySelector(".start").disabled = true;
  let counter = parseInt(num.textContent);

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
