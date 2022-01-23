// declare timer variable
var timerEl = document.getElementById("countdown")

// timer function
var countdown = function() {
    timeLeft = 100;

    timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timerEl.textContent = "Time: " + timeLeft ;
            timeLeft--;
        } else {
            clearInterval(timeInterval)
            timerEl.textContent = "";
        }
    }, 1000);
};

countdown();

// 