let counterBox = document.getElementById('counter');

function counter() {
    let count = 0;
    setInterval(function(count) {
        return count++
    }, 1000);
    counterBox.innerHTML = count;
}

counter();