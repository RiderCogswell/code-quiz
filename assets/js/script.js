// declare global variables
var timerEl = document.getElementById("countdown");
var body = document.body;
var answerDiv = document.querySelector(".answers");
var questionsDiv = document.querySelector(".questions");
var startButton = document.querySelector(".div-button");
var divHeader = document.querySelector(".welcome");
var results = document.createElement("h3");
body.appendChild(results);
var answerLabel;
var answerButton;    
var currentQuestionIndex = 0;
var score = document.getElementById("score");
var initialsPage = document.getElementById("enter-initials");
initialsPage.className = "hide";

// timer function
var startTimer = function() {
    timeLeft = 100;

    timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timerEl.textContent = "Time: " + timeLeft ;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            timerEl.textContent = "";
        }
    }, 1000);
};

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

// end game function
var gameOver = function() {
    questionsDiv.textContent = "";
}

// enter initials page 
var enterInitials = function() {
    initialsPage.removeAttribute("class", hide)
    initialsPage.class("show")
}
// define next question function
var showNextQuestion = function() { 
    // show where you are in the array
    var questionObj = questionArr[currentQuestionIndex];

    console.log(questionObj); 
    questionLabel = questionObj.question;
    questionH1 = document.createElement("h1");
    questionH1.textContent = questionLabel;
    questionsDiv.appendChild(questionH1);

    for (var i = 0; i < questionObj.answers.length; i++) {
       
        // get answers from array
        answerLabel = questionObj.answers[i];
        // construct button and use answer as label
        answerButton = document.createElement("button");
        answerButton.innerHTML = answerLabel;
        questionsDiv.appendChild(answerButton)

        // give button same class
        answerButton.className = "buttons";
        // verify this is correct answer
        if (answerLabel === questionObj.correctAnswer) {
            answerButton.dataset.correct = true;
        }
    

        // add event listener to buttons
        answerButton.addEventListener("click", function() {
        if (this.dataset.correct === "true") {
            results.textContent = "Correct!";
        } else {
            results.textContent = "Incorrect!"
            timeLeft -= 10;
        }
        if (timeLeft === 0 || questionArr.length - 1) {
            gameOver();
        }
        currentQuestionIndex++;
        showNextQuestion();
        });

    }
    console.log(answerLabel);
}



