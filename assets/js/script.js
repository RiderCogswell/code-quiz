// declare timer variable
var timerEl = document.getElementById("countdown")

// timer function
var startTimer = function() {
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

// create elements for start page
var body = document.body;
var divHeader = document.createElement("div");
var h1El = document.createElement("h1");
var divEl = document.createElement("div");
var parEl = document.createElement("p");
var divButton = document.createElement("div");
var startButton = document.createElement("button");
var answerDiv = document.createElement("div")
var correctAnswer = document.createElement("h3")
var incorrectAnswer = document.createElement("h3")


// add text content
h1El.textContent = "Coding Quiz";
parEl.textContent = "Try to answer the following coding questions within the time limit. Note that you will be penalized 10 seconds for each incorrect answer! Good luck!";
startButton.textContent = "Start Quiz!"
correctAnswer.textContent = "Correct!"
incorrectAnswer.textContent = "Incorrect!"

// append elements
body.appendChild(divHeader);
divHeader.appendChild(h1El);
divHeader.appendChild(divEl);
divEl.appendChild(parEl);
divEl.appendChild(divButton);
divButton.appendChild(startButton);
body.appendChild(answerDiv)


// give elements classes
h1El.className = "start";
divEl.className = "start-div";
divButton.className = "div-button";
startButton.className = "button";


// hide start pages elements
var hideStartPage = function() {
    divHeader.textContent = "";
}

// start quiz function 
var startQuiz = function() {
    hideStartPage();
    startTimer();
    showNextQuestion();
}

// add event listener to start button
startButton.addEventListener("click", function () {
    startQuiz();
})

// question array
var questionArr = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ['strings', 'booleans', 'alerts', 'numbers'],
        correctAnswer: 'alerts'
    },
    {
        question: "The condition in an if / else  statement is enclosed with?",
        answers: ['curly braces', 'parenthesis', 'square brackets', 'quotes'],
        correctAnswer: 'parenthesis'
    },
    {
        question: "Arrays in JavaScript can be used to hold?",
        answers: ['numbers & strings', 'booleans', 'other arrays', 'all of the above'],
        correctAnswer: 'all of the above'
    },
    {
        question: "A very useful tool when printing content to the debugger is:",
        answers: ['JavaScript', 'terminal/bash', 'for-loops', 'console.log()'],
        correctAnswer: 'console.log()'
    }
]




// define next question function
var showNextQuestion = function() { 
    // show where you are in the array
    var currentQuestionIndex = 0;
    var questionObj = questionArr[currentQuestionIndex];
    var answerLabel;
    var answerButton;
    
    console.log(questionObj);
    for (var i = 0; i < questionObj.answers.length; i++) {
        // get answers from array
        answerLabel = questionObj.answers[i];
        // construct button and use answer as label
        answerButton = document.createElement("button");
        answerButton.innerHTML = answerLabel;
        // verify this is correct answer
        if (answerLabel === questionObj.correctAnswer) {
            answerButton.dataset.correct = true;
        }
    

        // add event listener to buttons
        answerButton.addEventListener("click", function() {
        if (this.dataset.correct === "true") {
            answerDiv.appendChild(correctAnswer);
        } else {
            answerDiv.appendChild(incorrectAnswer)
            timeLeft -= 10;
        }
        showNextQuestion();
        });
    }
    // render 4 possible answers

    // select each answer

    // create 4 buttons
    
    // append to page
    

    console.log(answerLabel);
 
    body.appendChild(answerButton)


    // each click must respond to a click event

}

