const startScreen=document.getElementById('start-screen');
const startButton=document.getElementById('start-btn');
const quizScreen=document.getElementById('quiz-screen');
const questionText=document.getElementById('question-text');
const answersContainer=document.getElementById('answers-container');
const progressBar=document.getElementById('progress');
const finalScoreSpan=document.getElementById('final-score');
const maxScoreSpan=document.getElementById('max-score');
const resultMessage=document.getElementById('result-message');
const restartButton=document.getElementById('restart-btn');
const resultScreen=document.getElementById('result-screen');
const currentQuestionSpan=document.getElementById('current-question');
const totalQuestionsSpan=document.getElementById('total-questions');
const scoreSpan=document.getElementById('score');

const quizQuestions=[
    {
        question:"What is the capital of France?",
        answers:[
            {text:"Berlin", correct:false},
            {text:"Madrid", correct:false},
            {text:"Paris", correct:true},
            {text:"Rome", correct:false}
        ]
    },
    {
        question:"Which planet is known as the Red Planet?",
        answers:[
            {text:"Earth", correct:false},
            {text:"Mars", correct:true},
            {text:"Jupiter", correct:false},
            {text:"Saturn", correct:false}
        ]
    },
    {
        question:"What is the largest ocean on Earth?",
        answers:[
            {text:"Atlantic Ocean", correct:false},
            {text:"Indian Ocean", correct:false},
            {text:"Arctic Ocean", correct:false},
            {text:"Pacific Ocean", correct:true}
        ]
    },
    {
        question:"Who wrote 'Romeo and Juliet'?",
        answers:[
            {text:"Mark Twain", correct:false},
            {text:"William Shakespeare", correct:true},
            {text:"Charles Dickens", correct:false},
            {text:"Jane Austen", correct:false}
        ]
    },
    {
        question:"Which of these is not a programming language?",
        answers:[
            {text:"Python", correct:false},
            {text:"Java", correct:false},
            {text:"HTML", correct:true},
            {text:"C++", correct:false}
        ]
    }
];
let currentQuestionIndex=0;
let score=0;
let answerDisable=false;
totalQuestionsSpan.textContent=quizQuestions.length;
maxScore.textContent=quizQuestions.length;

//event listeners
 startButton.addEventListener("click", startQuiz);
 restartButton.addEventListener("click", restartQuiz);

 function startQuiz(){
    // reset variables
    currentQuestionIndex=0;
    scoreSpan.textContent=0;
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    showQuestion();
 }

 function showQuestion(){
    answerDisable=false;
    const currentQuestion=quizQuestions[currentQuestionIndex];
    currentQuestionSpan.textContent=currentQuestionIndex+1;
    const progressPercent=(currentQuestionIndex/quizQuestions.length)*100;
    progressBar.style.width=`${progressPercent}%`;
    questionText.textContent=currentQuestion.question;
    answersContainer.innerHTML="";
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.textContent=answer.text;
        button.classList.add("answer-btn");
        button.dataset.correct=answer.correct
    })
}

 function restartQuiz(){
    console.log("quiz restarted");
 }