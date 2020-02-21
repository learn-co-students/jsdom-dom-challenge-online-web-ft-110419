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

        manualIncrement(counter);
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
            // this section works once
            if (liList.length === 0 ) {
                li.innerHTML = `${counter} has been liked ${n} times`;
                ul.appendChild(li);
                return
            } 
            if (liList > 0) {
                for (let i = 0; i < liList.length; i++) {
                    let item = liList[i];
                    let num = item.split(" ")[0]
                    let times = item.split(" ")[4]
    
                    if (num != counter) {
    
                    } else if (num == counter) {
                        item = `${counter} has been liked ${times++} times`;
                        li.innerHTML = item
                    } 
                  }
                }
        };

       

      


            like()
        });
            // iterate through liList and check if each item starts with counter number
            // if not,  
            //  li.innerHTML = `${counter} has been liked ${n} times`;
                // ul.appendChild(li);
            // if yes, then
                // split string and set n to 5th element
                //  li.innerHTML = `${counter} has been liked ${n} times`;




            // NOT YET: I should see count of the number of 'likes' associated with that number.
                // add conditional:
                // if counter number is already in li.innerHTML, then increment n by 1

            // li.innerHTML = `${counter} has been liked ${n} times`;
            // ul.appendChild(li);
       


// WORKS, BUT ONLY ONCE - pause the counter
// WORKS - the pause button should then show the text "resume."
    document.getElementById("pause").addEventListener("click", () => {
        const pause = document.getElementById("pause").innerText;

        switch (pause) {
            case "pause":
                function pause() {
                    clearInterval(interval);
                    document.getElementById("pause").innerText = "resume"
                };

                // NOT YET - disable all buttons except the pause button
                pause();
                return

// WORKS, BUT ONLY ONCE When 'resume' is clicked, it should restart the counter and re-enable the buttons.
            case "resume":
                let counter = document.getElementById("counter").innerText;
                function resume() {
                    function autoIncrement(){
                        counter++;
                        document.getElementById("counter").innerText = counter;
                    }
                
                    let interval = setInterval(autoIncrement, 1000);
                    document.getElementById("pause").innerHTML = "pause"
                };
                resume();
                return
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







