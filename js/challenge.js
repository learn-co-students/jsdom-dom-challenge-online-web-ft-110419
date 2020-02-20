



document.addEventListener("DOMContentLoaded", () => {
    // WORKS: sets counter incrementing every second after page is loaded
    function increment(){
        counter++;
        document.getElementById("counter").innerText = counter;
    }

    let counter = 0;
    let interval = setInterval(increment, 1000);
});

function pause() {
    clearInterval(increment);
}
    
 

//    until user presses pause 



    // or + or -



// DOESN"T WORK: Pause counter when pause button is clicked
// currently causes HTML Header object to flash

document.getElementById("pause").addEventListener("click", () => {
  pause;
  document.getElementById("counter").innerText = counter;
});

