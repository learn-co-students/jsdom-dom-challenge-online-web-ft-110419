// Variables

const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const likes = document.getElementsByClassName('likes')[0];
const form = document.getElementById('comment-form');
const commentField = document.getElementById('comment-input');
const commentList = document.getElementById('list');
const buttons = document.querySelectorAll('button');
let timer;

// Functions

function addCount() {
    let currentCount = parseInt(counter.innerText, 10);
    counter.innerText = (currentCount + 1);
};

function minusCount() {
    let currentCount = parseInt(counter.innerText, 10)
    if (currentCount > 0){
        counter.innerText = (currentCount - 1);
    };
};

function like() {
    let currentCount = parseInt(counter.innerText, 10)
    let newLike = document.createElement('li');
    newLike.innerText = `${currentCount} has been liked!`;
    likes.appendChild(newLike);
};

function disableButtons() {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id != 'pause') {
            buttons[i].disabled = true;
        };
    };
};

function enableButtons() {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id != 'pause') {
            buttons[i].disabled = false;
        };
    };
};

function togglePause() {
    let btnText = pause.innerText;
    if (btnText == "pause") {
        disableButtons();
        pause.innerText = "resume";
        clearInterval(timer)
    } else {
        enableButtons();
        pause.innerText = "pause";
        timer = setInterval(addCount,1000);
    };
};

function addComment(e) {
    let comment = document.createElement('p');
    comment.innerText = commentField.value;
    commentList.appendChild(comment);
    e.preventDefault();
};

// Event Listeners

plus.addEventListener('click', addCount);
minus.addEventListener('click', minusCount);
heart.addEventListener('click',like);
pause.addEventListener('click',togglePause);
form.addEventListener('submit',addComment);

// start timer

timer = setInterval(addCount,1000);