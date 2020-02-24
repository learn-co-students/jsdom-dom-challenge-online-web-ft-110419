document.addEventListener("DOMContentLoaded", () => {
    
  //timer increments every second on page load
  let counter = 0;
  let counterBox = document.getElementById("counter").innerText;
  function autoIncrement(){
      counter ++;
      document.getElementById("counter").innerText = counter;
  };
  let interval = setInterval(autoIncrement, 1000);
  // function increment


  //manually update counter with + or - btns 
  document.getElementById("minus").addEventListener("click", function(event){
      //alt: counterNum = counterNum + 1
      document.getElementById("counter").innerText = counter --
  });

  document.getElementById("plus").addEventListener("click", function(event){
      //alt: counterNum = counterNum + 1
      document.getElementById("counter").innerText = counter ++
  });

  //like a counter -- create ul>li with likes per count
  let like = document.getElementById("heart")
  document.getElementById("heart").addEventListener("click", function(e){
      let liList = document.querySelector("ul").querySelectorAll("li");
      let ul = document.querySelector("ul");
      let li = document.createElement("li");
      let n = 1
      function like(){
        if (liList.length === 0){
          li.innerHTML = `${counter} has ${n} likes`;
          ul.appendChild(li);
        }
        else if (liList.length > 0){
          commentAdd(liList)
        }
      };

      function commentAdd(){
        for (let i = 0; i < liList.length; i++){
          let item = liList[i];
          let num = item.innerText.split(" ")[0]
          let times = item.innerText.split(" ")[2]
          if (num === counter){
            document.querySelector("ul").removeChild(item);
            li.innerText = `${counter} has ${++times} likes`;
            ul.appendChild(li);
          } else if (num !== counter.innerText) {
            li.innerText = `${counter} has been liked ${n} times`;
            ul.appendChild(li);
          } 
        }
      }
      like();
      

  });


  //pause / resume -counter --disable buttons
  const pause = document.getElementById("pause")
  pause.addEventListener("click", function(e){
      if (pause.innerText === "pause" ){
          interval = clearInterval(interval); 
          pause.innerText = "resume";
          // document.querySelector("btn") -- disable all
      } else {
          interval = setInterval(autoIncrement, 1000);
          pause.innerText = "pause";
          };
  });


  //leave comment
  document.getElementById("submit").addEventListener("click", function(e){
      event.preventDefault();

  });

});