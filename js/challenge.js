let counter = 0;

function autoIncrement(){
    counter++;
    document.getElementById("counter").innerText = counter;
}

let interval = setInterval(autoIncrement, 1000);


document.addEventListener("DOMContentLoaded", () => {
    interval
});

// WORKS: Manually Decrement
document.getElementById("minus").addEventListener("click", () => {
    function manualDecrement() {
        --counter;
    };

    manualDecrement(document.getElementById("counter").innerText);
    document.getElementById("counter").innerText = counter;
});

// WORKS: Manually Increment
document.getElementById("plus").addEventListener("click", () => {

    function manualIncrement() {
        ++counter;
    };

    manualIncrement(document.getElementById("counter").innerText);
    document.getElementById("counter").innerText = counter;
});

// WORKS: As a user, I can 'like' an individual number of the counter. 
document.getElementById("heart").addEventListener("click", () => {
    let counter = document.getElementById("counter").innerText;
    let liList = document.querySelector("ul").querySelectorAll("li")
    let ul = document.querySelector("ul");
    let li = document.createElement('li');
    let n = 1

    function like() {
        if (liList.length === 0 ) {
            li.innerHTML = `${counter} has been liked ${n} times`;
            ul.appendChild(li);
        } else if (liList.length > 0) {
            commentText(liList)
        }
    };

    function commentText() {
        for (let i = 0; i < liList.length; i++) {
            let item = liList[i];
            let num = item.innerText.split(" ")[0]
            let times = item.innerText.split(" ")[4]

            if (num === counter) {
                document.querySelector("ul").removeChild(item)
                li.innerText = `${counter} has been liked ${++times} times`;
                ul.appendChild(li);

            } else if (num !== counter.innerText) {
                li.innerText = `${counter} has been liked ${n} times`;
                ul.appendChild(li);
            } 
        }
    }
    like()
});


// WORKS - pause and resume the counter
document.getElementById("pause").addEventListener("click", () => {
    let button = document.getElementById("pause").innerText;
    let counter = document.getElementById("counter").innerText;

    function pause() {
        interval = clearInterval(interval);
        document.getElementById("pause").innerText = "resume"
    };

    function resume() {
        function autoIncrement(){
            counter++;
            document.getElementById("counter").innerText = counter;
        }
    
        interval = setInterval(autoIncrement, 1000);
        document.getElementById("pause").innerHTML = "pause"
    };

    if (button === "pause") {
            pause();
            document.getElementById("minus").disabled = true
            document.getElementById("plus").disabled = true
            document.getElementById("heart").disabled = true

    } else if (button === "resume") {
            resume();
            document.getElementById("minus").disabled = false
            document.getElementById("plus").disabled = false
            document.getElementById("heart").disabled = false
    };
});

// WORKS: As a user, I can leave comments
document.getElementById("submit").addEventListener("click", () => {
    event.preventDefault();
    let comment = document.getElementById("comment-input").value

    function createComment() {
        let commentList = document.querySelector("div")
        let ul = document.createElement("ul");
        let li = document.createElement('li');
        li.innerHTML = comment;
        commentList.appendChild(ul);
        ul.appendChild(li);
        document.getElementById("comment-input").value = ""
    };
    createComment()
});