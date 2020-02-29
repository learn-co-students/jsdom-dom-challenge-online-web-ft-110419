let counter = document.getElementById("counter") 
let counterNumber = parseInt(counter.textContent)

function incrementCounter(){
    counterNumber += 1 
    counter.textContent = counterNumber
  }
  
  let timer = setInterval(incrementCounter, 1000)

  //decrement button
  let minus = document.getElementById("minus")
  minus.addEventListener("click", function(event){
    counterNumber -= 1 
    counter.textContent = counterNumber 
  })

    // increment button 
    let plus = document.getElementById("plus")
    plus.addEventListener("click", function(event){
      counterNumber += 1 
      counter.textContent = counterNumber 
    })