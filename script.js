const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-btn');
const quizScreen = document.getElementById('quiz-screen');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const progressBar = document.getElementById('progress');
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');
const resultMessage = document.getElementById('result-message');
const restartButton = document.getElementById('restart-btn');
const resultScreen = document.getElementById('result-screen');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const scoreSpan = document.getElementById('score');
const timeLeftSpan = document.getElementById('time-left');

let quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false},
            {text: "Paris", correct: true},
            {text: "Rome", correct: false}
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: false}
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true}
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            {text: "Mark Twain", correct: false},
            {text: "William Shakespeare", correct: true},
            {text: "Charles Dickens", correct: false},
            {text: "Jane Austen", correct: false}
        ]
    },
    {
        question: "Which of these is not a programming language?",
        answers: [
            {text: "Python", correct: false},
            {text: "Java", correct: false},
            {text: "HTML", correct: true},
            {text: "C++", correct: false}
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answerDisable = false;
let timer;
const timePerQuestion = 15;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// Event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

// Shuffle utility
function shuffleArray(array){
    for(let i = array.length -1; i > 0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;

    shuffleArray(quizQuestions);

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion(){
    answerDisable = false;
    clearInterval(timer);
    startTimer();

    const currentQuestion = quizQuestions[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";

    shuffleArray(currentQuestion.answers);

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answersContainer.appendChild(button);
    });
}

function startTimer(){
    let time = timePerQuestion;
    timeLeftSpan.textContent = time;
    timer = setInterval(()=>{
        time--;
        timeLeftSpan.textContent = time;
        if(time <= 0){
            clearInterval(timer);
            selectAnswer(null);
        }
    },1000);
}

function selectAnswer(event){
    if(answerDisable) return;
    answerDisable = true;
    clearInterval(timer);

    let isCorrect = false;

    if(event){
        const selectedButton = event.target;
        isCorrect = selectedButton.dataset.correct === "true";

        Array.from(answersContainer.children).forEach(button=>{
            if(button.dataset.correct==="true") button.classList.add("correct");
            else if(button===selectedButton) button.classList.add("incorrect");
        });
    } else {
        Array.from(answersContainer.children).forEach(button=>{
            if(button.dataset.correct==="true") button.classList.add("correct");
        });
    }

    if(isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(()=>{
        currentQuestionIndex++;
        if(currentQuestionIndex < quizQuestions.length) showQuestion();
        else showResults();
    },1000);
}

function showResults(){
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;
    const percentScore = (score / quizQuestions.length) * 100;

    if(percentScore === 100) resultMessage.textContent = "Perfect Score! You're a quiz master!";
    else if(percentScore >= 80) resultMessage.textContent = "Good job! You know your stuff!";
    else if(percentScore >= 60) resultMessage.textContent = "Good effort! Keep learning!";
    else if(percentScore >= 40) resultMessage.textContent = "Not bad! But there's room for improvement.";
    else resultMessage.textContent = "You need to improve. Keep trying!";

    if(percentScore >= 60) launchConfetti();
}

function launchConfetti(){
    confetti({particleCount:100, spread:70, origin:{y:0.6}});
    let duration = 3000, end = Date.now() + duration;
    (function frame(){
        confetti({particleCount:5, startVelocity:30, spread:360, ticks:60, origin:{x:Math.random(), y:Math.random()-0.2}});
        if(Date.now()<end) requestAnimationFrame(frame);
    })();
}

function restartQuiz(){
    resultScreen.classList.remove("active");
    startQuiz();
}
