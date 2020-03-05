  let count = document.querySelector("#counter");
  
  // Increase and decrease count
  let minus = document.querySelector("#minus");
  let plus = document.querySelector("#plus");
  let pause = document.querySelector("#pause")

  let total = 0;
  
  
   plus.addEventListener("click", adding);
   minus.addEventListener("click", minuses);
  
  function adding () {
     count.innerHTML = total++;
  }
  function minuses (){
    total--;
     count.innerHTML = total;
  }
  
  // counter
  const timer = setInterval( () => {count.innerHTML = total++}, 1000);

  // stop interval 
    pause.addEventListener("click", paused);
 
   
   function paused () {
     clearInterval(timer);
     pause.innerHTML = "resume";
     plus.removeEventListener("click", adding);
     minus.removeEventListener("click", minuses);
   }
   
  //   function resumed () {
  //   timer;
  //   pause.innerHTML = "pause";
  //   plus.addEventListener("click", adding);
  //   minus.addEventListener("click", minuses);
  // }
   
   
function toggleButtons(value, button) {    
    if (value === 1) {
        activateButton(button);  
    } else {
        disableButton(button);
    }
}
      // for (let i = 0; i < 30; i++){
      //   if ( pause.innerHTML === "pause") {
      //         pause.innerHTML = "pause";
      //   } else {
      //       pause.innerHTML = "resume"; 
      //       timer;
      //   }
      // }
  
  // adding comments 
  let comments = document.querySelector(".comments");
  let textField = document.querySelector("#comment-input");
  let submitted = document.querySelector("#submit");
  
  submitted.addEventListener("click", (e) => {
    comments.innerHTML += `<p>${textField.value}</p> </br>`;
    e.preventDefault()
  });
  
  //Likes
  let heart = document.querySelector("#heart");
  
  let likes = document.querySelector(".likes");
  
  heart.addEventListener("click", () => {
    likes.innerHTML += `<li>${count.textContent} and you liked it </li>`;
  });
  
  minus(); 
  adding();