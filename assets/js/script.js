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
initialsPage.style.display = "none";
var submitInitials = document.getElementById("submitInitials")
var highscoresDiv = document.getElementById("highscores");

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
        if (timeLeft === 0 || currentQuestionIndex === questionArr.length) {
            clearInterval(timeInterval);
            score.textContent = "Final score is " + timeLeft + ".";
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



// save tasks 
submitInitials.addEventListener("click", function() {
    var saveInitials = document.getElementById("initials").value;
    var initials = JSON.parse(window.localStorage.getItem('Initials')) || [];
    console.log(saveInitials);
    var newScore = {
                    initials: saveInitials,
                    score: timeLeft
                };
    initials.push(newScore);
    localStorage.setItem("Initials", JSON.stringify(initials));
    showHighscores();
})

// show highscores
var showHighscores = function() {
    initialsPage.style.display = "none";
    // header
    var highHeader = document.createElement("h3");
    highHeader.textContent = "Highscores!"
    highscoresDiv.appendChild(highHeader)
    highHeader.className = "start";
    // list items (highscores)
    var highList = document.createElement("li");
    highList.className = "start-div";
    highList.innerHTML = window.localStorage.getItem("Initials");
    body.appendChild(highscoresDiv);
    highscoresDiv.appendChild(highList);
}

// end game function
var gameOver = function() {
    enterInitials();
    questionsDiv.textContent = "";
}

// enter initials page 
var enterInitials = function() {
    timerEl.textContent = "";
    results.style.display = "none";
    if (initialsPage.style.display === "none") {
        initialsPage.style.display = "block";
    }
}
// define next question function
var showNextQuestion = function() { 
    // show where you are in the array
    var questionObj = questionArr[currentQuestionIndex];
    questionsDiv.innerHTML = ""
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
        if (timeLeft === 0) {
            gameOver();
        }
        if(currentQuestionIndex === questionArr.length) {
            gameOver();
        } else {
            showNextQuestion();
            currentQuestionIndex++;
        }
        });

    }
    console.log(answerLabel);
}



