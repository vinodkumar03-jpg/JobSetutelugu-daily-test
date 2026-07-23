// ===============================
// JobSetu Telugu Exam System
// ===============================

let questions = [];
let currentQuestion = 0;
let answers = [];
let timer = 25 * 60;

// Elements

const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const questionNo = document.getElementById("questionNo");
const palette = document.getElementById("palette");
const timerDisplay = document.getElementById("timer");


// ===============================
// Load Questions
// ===============================

fetch("questions.json")
    .then(response => response.json())
    .then(data => {

        questions = data;

        if (!questions.length) {
            alert("No questions found.");
            return;
        }

        answers = new Array(questions.length).fill(null);

        createPalette();
        loadQuestion();
        startTimer();

    })
    .catch(error => {

        console.error(error);
        alert("Unable to load questions.json");

    });
// ======================================
// Previous Button
// ======================================

document.getElementById("prevBtn").addEventListener("click", () => {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

});

// ======================================
// Next Button
// ======================================

document.getElementById("nextBtn").addEventListener("click", () => {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    }

});

// ======================================
// Create Question Palette
// ======================================

function createPalette() {

    palette.innerHTML = "";

    for (let i = 0; i < questions.length; i++) {

        const btn = document.createElement("button");

        btn.innerText = i + 1;

        btn.className = "palette-btn";

        btn.onclick = function () {

            currentQuestion = i;

            loadQuestion();

        };

        palette.appendChild(btn);

    }

    updatePalette();

}

// ======================================
// Update Palette
// ======================================

function updatePalette() {

    const buttons = document.querySelectorAll(".palette-btn");

    buttons.forEach((btn, index) => {

        btn.classList.remove("answered");
        btn.classList.remove("current");

        if (answers[index] !== null) {

            btn.classList.add("answered");

        }

    });

    if (buttons[currentQuestion]) {

        buttons[currentQuestion].classList.add("current");

    }

}

// ======================================
// Timer
// ======================================

function startTimer() {

    const interval = setInterval(() => {

        const minutes = Math.floor(timer / 60);

        const seconds = timer % 60;

        timerDisplay.innerHTML =
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");

        timer--;

        if (timer < 0) {

            clearInterval(interval);

            alert("Time is Up!");

            submitExam();

        }

    }, 1000);

}

startTimer();

// ======================================
// Submit Button
// ======================================

document.getElementById("submitBtn").addEventListener("click", () => {

    if (confirm("Are you sure you want to submit the test?")) {

        submitExam();

    }

});

// ======================================
// Submit Exam
// ======================================

function submitExam() {

    let score = 0;

    questions.forEach((q, index) => {

        if (answers[index] === q.answer) {

            score++;

        }

    });

    localStorage.setItem("score", score);

    localStorage.setItem("totalQuestions", questions.length);

    localStorage.setItem("answers", JSON.stringify(answers));

    window.location.href = "result.html";

}
