
let counter = document.getElementById("counter")

let pause = document.getElementById("pause")

document.addEventListener("DOMContentLoaded", function(){

	if (pause.innerText == "pause") {
		let count = setInterval(function(){
   			let number = Number(counter.innerText)
    		counter.innerText = number + 1
			}, 1000);
		}
	}

pause.addEventListener("click", function() {
	let buttons = document.getElementsByTagName("button")
	if (pause.innerText == "pause"){
		for (i = 0; i < buttons.length; i++) {
			buttons[i].disabled = true;
		}
		clearInterval(count)
		pause.innerText = "resume"
	}
	else {
		pause.innerText = "pause"
		for (i = 0; i < buttons.length; i++) {
			buttons[i].disabled = false;
		}
	}
})



document.getElementById("minus").addEventListener("click", function(){
	let number = Number(counter.innerText)
	counter.innerText = number - 1
})

document.getElementById("plus").addEventListener("click", function(){
	number = Number(counter.innerText)
	counter.innerText = number + 1

})

let number_counters = [];

document.getElementById("heart").addEventListener("click", function(){
	let number = Number(counter.innerText)
	if (number_counters[number] == undefined) {
		number_counters[number] = 1
	}
	else {
		number_counters[number] += 1
	}

	let like = document.createElement("li")
	like.innerText = `${number} has been liked ` + number_counters[`${number}`] + " times"
	document.querySelector(".likes").appendChild(like)
})

let submit = document.querySelector("form#comment-form > button")

submit.addEventListener("click", function(){
	let input = document.querySelector("form#comment-form > input")
	let p = document.createElement("p")
	p.innerText = input.value
	document.getElementById("list").appendChild(p)
	event.preventDefault()
});


// let resume = document.getElementById("resume")

// resume.addEventListener("click", function(){
// 	let buttons = document.getElementsByTagName("button")
// 	for (i = 0; i < buttons.length; i++) {
// 		buttons[i].disabled = false
// 	}
// })
