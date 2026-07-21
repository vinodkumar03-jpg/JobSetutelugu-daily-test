let timeLeft = 25 * 60;
let currentQuestion = 0;
let questions = [];
let answers = [];

// Welcome Message
document.getElementById("student").innerHTML =
"Welcome, " + localStorage.getItem("studentName");

// ================= TIMER =================

function startTimer() {

    let timer = setInterval(function () {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        document.getElementById("timer").innerHTML =
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        timeLeft--;

        if (timeLeft < 0) {

            clearInterval(timer);

            localStorage.setItem("answers", JSON.stringify(answers));

            alert("Time is Over!");

            window.location.href = "result.html";

        }

    }, 1000);

}

// ================= LOAD QUESTIONS =================

fetch("questions.json")
.then(response => response.json())
.then(data => {

    questions = data;

    showQuestion();

    loadPalette();

    startTimer();

});

// ================= SHOW QUESTION =================

function showQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("questionNumber").innerHTML =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    document.getElementById("question").innerHTML =
        "Q" + (currentQuestion + 1) + ". " + q.question;

    let html = "";

    q.options.forEach((option, index) => {

        html += `
            <div class="option">
                <input
                    type="radio"
                    name="answer"
                    value="${index}"
                    ${answers[currentQuestion] == index ? "checked" : ""}>
                ${option}
            </div>
        `;

    });

    document.getElementById("options").innerHTML = html;

    let btn = document.getElementById("nextBtn");

    if (currentQuestion == questions.length - 1) {

        btn.innerHTML = "Finish Test";

    } else {

        btn.innerHTML = "Next";

    }

    loadPalette();

}

// ================= QUESTION PALETTE =================

function loadPalette() {

    let html = "";

    questions.forEach((q, index) => {

        let cls = "palette-btn";

        if (index == currentQuestion)
            cls += " current";

        if (answers[index] != undefined)
            cls += " answered";

        html += `
        <button
            class="${cls}"
            onclick="gotoQuestion(${index})">
            ${index + 1}
        </button>
        `;

    });

    document.getElementById("palette").innerHTML = html;

}

// ================= GO TO QUESTION =================

function gotoQuestion(index) {

    let selected =
    document.querySelector('input[name="answer"]:checked');

    if(selected){

        answers[currentQuestion] = Number(selected.value);

    }

    currentQuestion = index;

    showQuestion();

}

// ================= NEXT QUESTION =================

function nextQuestion() {

    let selected =
    document.querySelector('input[name="answer"]:checked');

    if(selected){

        answers[currentQuestion] = Number(selected.value);

    }

    if(currentQuestion < questions.length - 1){

        currentQuestion++;

        showQuestion();

    }else{

        localStorage.setItem("answers", JSON.stringify(answers));

        window.location.href = "result.html";

    }

}

// ================= PREVIOUS QUESTION =================

function previousQuestion() {

    let selected =
    document.querySelector('input[name="answer"]:checked');

    if(selected){

        answers[currentQuestion] = Number(selected.value);

    }

    if(currentQuestion > 0){

        currentQuestion--;

        showQuestion();

    }

}
