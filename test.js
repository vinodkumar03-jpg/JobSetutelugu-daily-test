let timeLeft = 25 * 60;
let currentQuestion = 0;
let questions = [];
let answers = [];

// Welcome message
document.getElementById("student").innerHTML =
"Welcome, " + localStorage.getItem("studentName");

// Timer
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

// Load Questions
fetch("questions.json")
.then(response => response.json())
.then(data => {

    questions = data;

    showQuestion();

    startTimer();

});

// Show Question
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

}

// Next Question
function nextQuestion() {

    let selected =
        document.querySelector('input[name="answer"]:checked');

    if (selected) {
        answers[currentQuestion] = Number(selected.value);
    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        localStorage.setItem("answers", JSON.stringify(answers));

        window.location.href = "result.html";

        return;
    }

    showQuestion();

}

// Previous Question
function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

}
