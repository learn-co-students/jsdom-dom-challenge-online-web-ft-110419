document.addEventListener("DOMContentLoaded", function() {
  const btns = document.querySelectorAll("button");
  const counterDisplay = document.getElementById("counter");
  const likesUl = document.querySelector(".likes");
  const input = document.getElementById("comment-input");
  const list = document.getElementById("list");

  let counter = 0;
  let likes = {};
  let timerId;

  btns.forEach(btn => {
    btn.addEventListener("click", clickHandler);
  });

  startTimer();

  function clickHandler(e) {
    switch (e.target.id) {
      case "minus":
        decreaseCounter();
        break;
      case "plus":
        increaseCounter();
        break;
      case "heart":
        like();
        displayLikes();
        break;
      case "pause":
        if (e.target.innerText == "pause") {
          stopTimer();
          e.target.innerText = "resume";
          disableButtons();
        } else {
          startTimer();
          e.target.textContent = "pause";
          enableButtons();
        }
        break;
      case "submit":
        addComment(input.value);
        input.value = "";
        e.preventDefault();
        break;
    }
  }

  function addComment(comment) {
    const p = document.createElement("p");
    p.innerText = comment;
    list.appendChild(p);
  }

  function disableButtons() {
    btns.forEach(btn => {
      if (btn.id !== "pause") {
        btn.disabled = true;
      }
    });
  }

  function enableButtons() {
    btns.forEach(btn => (btn.disabled = false));
  }

  function updateCounterDisplay() {
    counterDisplay.textContent = counter;
  }

  function like() {
    likes[counter] = parseInt(likes[counter]) + 1 || 1;
  }

  function displayLikes() {
    clearLikesDisplay();

    for (const like in likes) {
      const li = document.createElement("li");
      li.innerText = `${like} has been liked ${likes[like]} time${
        likes[like] > 1 ? "s" : ""
      }`;

      likesUl.appendChild(li);
    }
  }

  function clearLikesDisplay() {
    while (likesUl.hasChildNodes()) {
      likesUl.removeChild(likesUl.lastChild);
    }
  }

  function stopTimer() {
    clearTimeout(timerId);
  }

  function startTimer() {
    timerId = setInterval(increaseCounter, 1000);
  }

  function decreaseCounter() {
    counter--;
    updateCounterDisplay();
  }

  function increaseCounter() {
    counter++;
    updateCounterDisplay();
  }
});