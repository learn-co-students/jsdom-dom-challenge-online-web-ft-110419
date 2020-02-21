document.addEventListener("DOMContentLoaded", () => {

    let counter = 0;

    // WORKS: As a user, I should see the timer increment every second once the page has loaded.
    function autoIncrement(){
        counter++;
        document.getElementById("counter").innerText = counter;
    }

    let interval = setInterval(autoIncrement, 1000);

    // WORKS: Manually Decrement
    document.getElementById("minus").addEventListener("click", () => {
        let counter = document.getElementById("counter").innerText;
        function manualDecrement() {
            counter--;
        };

        function pause() {
            clearInterval(interval);
        };

        manualDecrement(counter);
        document.getElementById("counter").innerText = counter;
        pause();
    });

    // WORKS: Manually Increment
    document.getElementById("plus").addEventListener("click", () => {
        let counter = document.getElementById("counter").innerText;
        function manualIncrement() {
            counter++;
        };

        function pause() {
            clearInterval(interval);
        };

        manualIncrement(counter);
        document.getElementById("counter").innerText = counter;
        pause();
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


// WORKS, BUT ONLY ONCE - pause the counter
// WORKS - the pause button should then show the text "resume."
    document.getElementById("pause").addEventListener("click", () => {
        let button = document.getElementById("pause").innerText;
        let counter = document.getElementById("counter").innerText;

        function pause() {
            clearInterval(interval);
            document.getElementById("pause").innerText = "resume"
        };

        function resume() {
            function autoIncrement(){
                counter++;
                document.getElementById("counter").innerText = counter;
            }
        
            let interval = setInterval(autoIncrement, 1000);
            document.getElementById("pause").innerHTML = "pause"
        };

        if (button === "pause") {
                // NOT YET - disable all buttons except the pause button
                pause();
        } else if (button === "resume") {
                // WORKS, BUT ONLY ONCE When 'resume' is clicked, it should restart the counter and re-enable the buttons.
                resume();
        };
    });

// WORKS: As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
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
});



