// DELIVERABLES:
// As a user, I should see the timer increment every second once the page has loaded. ✅
// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons.
// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
// --------------------------------------------------------------------------------------------------------//





// ----------------Increment/Decrement/Pause-Section-Start-------------------------------------------------//

let timeOut = setInterval(counterIncreaseByOne, 1000); // takes an argument of the function counterIncreaseByOne and repeats the interval every 1 seconc
let pause = document.getElementById("pause"); // pause button
let incrementButton = document.getElementById("plus"); // plus button
let decrementButton = document.getElementById("minus"); // minus button
let heart = document.getElementById("heart"); // heart button

// right now only the pause button fully works
document.addEventListener("DOMContentLoaded", () => {
  timeOut
});

function counterIncreaseByOne() { 
    let counterIncrement = document.getElementById("counter");
    let counterCount = parseInt(counterIncrement.innerText); //parseint takes the 0 in the counterIncrement and makes it into an integer
    counterIncrement.innerText = counterCount += 1; // we set the counterCount to add 1
}

pause.addEventListener("click", (e) => {
    clearInterval(timeOut);
});

// ----------------Increment/Decrement/Pause-Section-End---------------------------------------------------//



// ----------------Heart-Button-Section-Start--------------------------------------------------------------//
// ----------------Heart-Button-Section-End----------------------------------------------------------------//



// ----------------Comments-Section-Start------------------------------------------------------------------//
// ----------------Comments-Section-End--------------------------------------------------------------------//
    