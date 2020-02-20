 // WORKS: sets counter incrementing every second after page is loaded
document.addEventListener("DOMContentLoaded", () => {
    function increment(){
        counter++;
        document.getElementById("counter").innerText = counter;
    }

    let counter = 0;
    let interval = setInterval(increment, 1000);
});


    



// DOESN"T WORK: Pause counter when pause button is clicked
// currently causes HTML Header object to flash
// document.getElementById("pause").addEventListener("click", () => {
//     function pause() {
//         clearInterval(increment);
//     }
//   pause;
//   document.getElementById("counter").innerText = counter;
// });

