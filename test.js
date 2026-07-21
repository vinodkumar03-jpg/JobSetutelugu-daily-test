// =========================
// JOBSETU TELUGU TEST.JS
// =========================

let timeLeft = 25 * 60;
let currentQuestion = 0;
let questions = [];
let answers = [];

// Welcome Message
document.getElementById("student").innerHTML =
"Welcome, " + (localStorage.getItem("studentName") || "Student");

// ---------------- Timer ----------------

function startTimer(){

    const timer = setInterval(function(){

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        document.getElementById("timer").innerHTML =
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        timeLeft--;

        if(timeLeft < 0){

            clearInterval(timer);

            localStorage.setItem(
                "answers",
                JSON.stringify(answers)
            );

            alert("Time is Over!");

            window.location.href = "result.html";
        }

    },1000);

}

// ---------------- Load Questions ----------------

fetch("questions.json")
.then(res => res.json())
.then(data=>{

    questions = data;

    showQuestion();

    startTimer();

});

// ---------------- Show Question ----------------

function showQuestion(){

    let q = questions[currentQuestion];

    document.getElementById("questionNumber").innerHTML =
    `Question ${currentQuestion+1} of ${questions.length}`;

    document.getElementById("question").innerHTML =
    q.question;

    let html = "";

    q.options.forEach((option,index)=>{

        html += `
        <label class="option ${answers[currentQuestion]===index ? 'selected' : ''}">

            <input
                type="radio"
                name="answer"
                value="${index}"
                ${answers[currentQuestion]===index ? "checked" : ""}>

            ${option}

        </label>
        `;

    });

    document.getElementById("options").innerHTML = html;

    // Click anywhere on option
    document.querySelectorAll(".option").forEach(label=>{

        label.addEventListener("click",function(){

            document.querySelectorAll(".option").forEach(x=>{
                x.classList.remove("selected");
            });

            this.classList.add("selected");

            this.querySelector("input").checked = true;

            answers[currentQuestion] =
            Number(this.querySelector("input").value);

            loadPalette();

        });

    });

    document.getElementById("nextBtn").innerHTML =
    currentQuestion === questions.length-1
    ? "Finish Test"
    : "Next";

    loadPalette();

}

// ---------------- Palette ----------------

function loadPalette(){

    let html = "";

    questions.forEach((q,index)=>{

        let cls = "palette-btn";

        if(index===currentQuestion)
            cls += " current";

        if(answers[index]!==undefined)
            cls += " answered";

        html += `
        <button
        class="${cls}"
        onclick="gotoQuestion(${index})">
        ${index+1}
        </button>
        `;

    });

    document.getElementById("palette").innerHTML = html;

}

// ---------------- Jump Question ----------------

function gotoQuestion(index){

    currentQuestion = index;

    showQuestion();

}

// ---------------- Next ----------------

function nextQuestion(){

    if(currentQuestion < questions.length-1){

        currentQuestion++;

        showQuestion();

    }else{

        localStorage.setItem(
            "answers",
            JSON.stringify(answers)
        );

        window.location.href="result.html";

    }

}

// ---------------- Previous ----------------

function previousQuestion(){

    if(currentQuestion>0){

        currentQuestion--;

        showQuestion();

    }

}
