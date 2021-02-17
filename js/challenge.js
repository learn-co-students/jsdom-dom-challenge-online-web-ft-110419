const counter = document.getElementById("counter")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const pause = document.getElementById("pause")
let buttons = document.querySelectorAll('button')
let count = counter.innerText
var i = 1;
var interval


function increment(){
    counter.innerText = parseInt(counter.innerText)+1
    return count
}

document.addEventListener("DOMContentLoaded", (e)=>{
    if (e){
        // debugger
        interval = setInterval(function(){increment()}, 1000)
     
    };
    e.preventDefault();
});
plus.addEventListener("click",()=>{
    counter.innerText = parseInt(counter.innerText)+1
})
minus.addEventListener("click",()=>{
    counter.innerText = parseInt(counter.innerText)-1
})
function disableBTNS(){
    buttons.forEach(function(btn){
      if (btn.id != "pause"){
         btn.disabled = true;
         clearInterval(interval);
      }
    });
  }
  
  function enableBTNS(){
    buttons.forEach(function(btn){
      if (btn.disabled == true){
         btn.disabled = false;
        //  setInterval(function(){increment()}, 1000)
      }
    })
  }
pause.addEventListener("click",()=>{
 
        if (pause.innerText == "pause"){
          pause.innerText = "resume";
          disableBTNS();
          
        }else{
          pause.innerText = "pause";
          enableBTNS()
          setInterval(function(){increment()},1000);
        }
})


    
    