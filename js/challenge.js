let counter = document.getElementById('counter');
let likes = document.querySelector('ul');

let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
let heartButton = document.getElementById('heart');
let pauseButton = document.getElementById('pause');

function increaseCounter() {
    counter.innerText = parseInt(counter.innerText) + 1;
}

function decreaseCounter() {
    counter.innerText = parseInt(counter.innerText) - 1;
}

function like() {
    let li = document.createElement('li')
    let likeButton = document.createElement('button')
    likeButton.id = `like-button-${likes.children.length}`
    likeButton.innerText = "❤️ 1"
    li.innerText = counter.innerText + " "
    likes.appendChild(li);
    li.appendChild(likeButton);
}

function addLike(button) {
    let likes = parseInt(button.innerText.split(" ")[1])
    button.innerText = `❤️ ${likes + 1}`
}

function pause() {
    if (pauseButton.innerText == "resume") {
        pauseButton.innerText = "pause"
        timer =     setInterval(increaseCounter, 1000);
    } else if (pauseButton.innerText = "pause") {
        pauseButton.innerText = "resume"   
        clearInterval(timer)
    }
}

function addEventListeners() {
   plusButton.addEventListener('click', increaseCounter);
   minusButton.addEventListener('click', decreaseCounter);
   heartButton.addEventListener('click', like);
   likes.addEventListener('click', function(evt) {
        if (evt.target && evt.target.matches('li > button')) {
            addLike(evt.target);
        }
    });
    pauseButton.addEventListener('click', pause)
}

let timer = setInterval(increaseCounter, 1000);

document.addEventListener('DOMContentLoaded', ()=>{
    timer;
    addEventListeners();
});