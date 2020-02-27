let counter = document.getElementById('counter');
let likes = document.querySelector('ul');

let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
let heartButton = document.getElementById('heart');


function increaseCounter() {
    counter.innerText = parseInt(counter.innerText) + 1;
}

function decreaseCounter() {
    counter.innerText = parseInt(counter.innerText) - 1;    
}

function like() {
    let li = document.createElement('li')
    likeButton = document.createElement('BUTTON')
    likeButton.innerText = "❤️ 1"
    li.innerText = counter.innerText + " "
    likes.appendChild(li)
    li.appendChild(likeButton)
}

function addLikes() {
    let likes = parseInt(likeButton.innerText.split(" ")[1])
    return likes + 1;
}

function addEventListeners() {
   plusButton.addEventListener('click', increaseCounter);
   minusButton.addEventListener('click', decreaseCounter);
   heartButton.addEventListener('click', like);
   likeButton.addEventListener('click', addLikes)
}

let timer = setInterval(increaseCounter, 1000);

document.addEventListener('DOMContentLoaded', ()=>{
    timer;
    addEventListeners();
});