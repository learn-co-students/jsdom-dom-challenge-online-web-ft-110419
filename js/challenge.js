let counterBox = document.getElementById('counter');
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');

function counter() {
    counterBox.innerText = parseInt(counterBox.innerText) + 1;
}

function increaseCounter() {
    counterBox.innerText = parseInt(counterBox.innerText) + 1;
} 

let timer = setInterval(counter, 1000);

function addEventListeners() {
   plusButton.addEventListener('click', increaseCounter)
}


document.addEventListener('DOMContentLoaded', ()=>{
    timer
    addEventListeners()
})