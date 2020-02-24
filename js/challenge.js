setInterval(function() {
  if (!paused) {
    addSecond();
  }
}, 1000);

function addSecond() {
  let counter = document.getElementById("counter");
  let counterNum = parseInt(counter.innerText);
  counter.textContent = counterNum + 1;
}
function subtractSecond() {
  let counter = document.getElementById("counter");
  let counterNum = parseInt(counter.innerText);
  counter.textContent = counterNum - 1;
}

document.getElementById("plus").addEventListener("click", function() {
  addSecond();
});
document.getElementById("minus").addEventListener("click", function() {
  subtractSecond();
});

document.getElementById("heart").addEventListener("click",function() {
  let num = document.getElementById("counter").innerText;
  let likes = document.querySelector(".likes");
  let liArray = likes.querySelectorAll("li");
  let newLi = document.createElement("LI");
  let like = 1;
  
  function clickHeart() {
    if (liArray.length === 0) {
      newLi.innerText = `${num} has been liked ${like} time(s)`;
      likes.appendChild(newLi);
    } else {
      addLikes();
    }
  }
  
  function addLikes() {
    for (let i = 0; i < liArray.length; i++) {
      let numInLi = liArray[i].innerText.split(" ")[0];
      let likeCount = liArray[i].innerText.split(" ")[4];
      if (numInLi === num) {
        likes.removeChild(liArray[i]);
        newLi.innerText = `${num} has been liked ${++likeCount} time(s)`;
        likes.appendChild(newLi);
      } else if (numInLi !== num.innerText) {
        newLi.innerText = `${num} has been liked ${like} time(s)`;
        likes.appendChild(newLi);
      }
    }
  }
  clickHeart();
});

let paused = false;

document.getElementById("pause").addEventListener("click",function() {
  let pause = document.getElementById("pause");
  if (pause.innerText === "pause") {
    pause.innerText = "resume";
    paused = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("heart").disabled = true;
  } else if (pause.innerText === "resume") {
    pause.innerText = "pause";
    paused = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("heart").disabled = false;
  }
});

document.getElementById("submit").addEventListener("click",function(event) {
  let comments = document.querySelector(".comments");
  let newComment = document.createElement("LI");
  newComment.innerText = document.getElementById("comment-input").value;
  comments.appendChild(newComment);
  event.preventDefault();
}, false);