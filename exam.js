// =========================================
// JobSetu Telugu - Exam Engine (Part 1)
// =========================================

// Sample Questions
// Later we will load these from JSON

const questions = [

{
    id:1,
    question:"Which Article guarantees Equality before Law?",
    options:[
        "Article 14",
        "Article 19",
        "Article 21",
        "Article 32"
    ],
    answer:0
},

{
    id:2,
    question:"Who is known as the Father of the Indian Constitution?",
    options:[
        "Mahatma Gandhi",
        "Dr. B.R. Ambedkar",
        "Jawaharlal Nehru",
        "Rajendra Prasad"
    ],
    answer:1
},

{
    id:3,
    question:"Capital of Telangana?",
    options:[
        "Warangal",
        "Karimnagar",
        "Hyderabad",
        "Nizamabad"
    ],
    answer:2
},

{
    id:4,
    question:"Largest district in Telangana by area?",
    options:[
        "Nalgonda",
        "Bhadradri",
        "Mulugu",
        "Adilabad"
    ],
    answer:2
},

{
    id:5,
    question:"How many Fundamental Rights are there?",
    options:[
        "5",
        "6",
        "7",
        "8"
    ],
    answer:1
}

];

// ===============================

let currentQuestion = 0;

let userAnswers = new Array(questions.length).fill(null);
// Question Status
// not-visited
// not-answered
// answered
// review

let questionStatus = new Array(questions.length).fill("not-visited");

// First question is already visited
questionStatus[0] = "not-answered";
let reviewQuestions = [];

let timeLeft = 90 * 60;

// ===============================
// HTML Elements
// ===============================

const questionNumber =
document.getElementById("questionNumber");

const questionText =
document.getElementById("questionText");

const optionsContainer =
document.getElementById("optionsContainer");

const palette =
document.getElementById("palette");

const timer =
document.getElementById("timer");

const prevBtn =
document.getElementById("prevBtn");

const nextBtn =
document.getElementById("nextBtn");

// ===================================
// Display Question
// ===================================

function displayQuestion(index){

const q = questions[index];

questionNumber.innerHTML =
`Question ${index+1} of ${questions.length}`;

questionText.innerHTML =
q.question;

optionsContainer.innerHTML="";

q.options.forEach((option,i)=>{

const checked =
userAnswers[index]===i ? "checked":"";

optionsContainer.innerHTML +=

`
<label class="option">

<input
type="radio"
name="option"
value="${i}"
${checked}
>

${option}

</label>

`;

});

document
.querySelectorAll("input[name='option']")
.forEach(radio=>{

radio.addEventListener("change", (e) => {

    userAnswers[index] = parseInt(e.target.value);

    questionStatus[index] = "answered";

    updatePalette();

});
displayQuestion(currentQuestion);

// ===================================
// Question Palette
// ===================================

function createPalette(){

palette.innerHTML="";

questions.forEach((q,index)=>{

const btn=document.createElement("button");

btn.innerText=index+1;

btn.onclick=()=>{

currentQuestion=index;

displayQuestion(currentQuestion);

};

palette.appendChild(btn);

});

}

createPalette();

// ===================================
// Update Palette Colors
// ===================================

function updatePalette() {

    const buttons = palette.querySelectorAll("button");

    buttons.forEach((button, index) => {

        button.className = "";

        switch (questionStatus[index]) {

            case "answered":
                button.classList.add("answered");
                break;

            case "review":
                button.classList.add("review");
                break;

            case "not-answered":
                button.classList.add("notanswered");
                break;

        }

        if (index === currentQuestion) {

            button.classList.add("current");

        }

    });

    updateProgress();

    saveExam();

}

// ===================================
// Previous Button
// ===================================

prevBtn.addEventListener("click",()=>{

if(currentQuestion>0){

currentQuestion--;

displayQuestion(currentQuestion);

}

});

// ===================================
// Next Button
// ===================================

nextBtn.addEventListener("click",()=>{

if(currentQuestion<questions.length-1){

currentQuestion++;

displayQuestion(currentQuestion);

}

});

// ===================================
// Timer
// ===================================

function startTimer(){

const interval=setInterval(()=>{

let minutes=Math.floor(timeLeft/60);

let seconds=timeLeft%60;

timer.innerHTML=

`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

timeLeft--;

if(timeLeft<0){

clearInterval(interval);

alert("Time Up!");

submitExam();

}

},1000);

}

startTimer();

// ===================================
// Dummy Submit
// ===================================

function submitExam(){

localStorage.setItem(

"userAnswers",

JSON.stringify(userAnswers)

);

window.location.href="result.html";

}
