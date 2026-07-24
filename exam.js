// ===========================================
// JobSetu Telugu - Online Exam Engine
// Part 1 : Initialization & Loading
// ===========================================

// -----------------------------
// Configuration
// -----------------------------
const EXAM_DURATION = 90 * 60; // 90 Minutes

// -----------------------------
// Global Variables
// -----------------------------
let questions = [];
let currentQuestion = 0;
let timeLeft = EXAM_DURATION;

let userAnswers = [];
let questionStatus = [];

// -----------------------------
// HTML Elements
// -----------------------------
const timer = document.getElementById("timer");
const candidateName = document.getElementById("candidateName");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");

const optionsContainer = document.getElementById("optionsContainer");

const palette = document.getElementById("palette");

const prevBtn = document.getElementById("prevBtn");
const clearBtn = document.getElementById("clearBtn");
const reviewBtn = document.getElementById("reviewBtn");
const saveNextBtn = document.getElementById("saveNextBtn");
const submitBtn = document.getElementById("submitBtn");

// -----------------------------
// Candidate Details
// -----------------------------
const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (user && candidateName) {
    candidateName.textContent = user.name;
} else if (candidateName) {
    candidateName.textContent = "Candidate";
}

// -----------------------------
// Load Questions
// -----------------------------
async function loadQuestions() {

    try {

        const response = await fetch("data/tgpsc/mock1.json");

        questions = await response.json();

        userAnswers = new Array(questions.length).fill(null);

        questionStatus = new Array(questions.length).fill("not-visited");

        questionStatus[0] = "not-answered";

        createPalette();

        displayQuestion(0);

        updateProgress();

        restoreExam();

        startTimer();

    } catch (error) {

        console.error(error);

        alert("Unable to load questions.");

    }

}

// -----------------------------
// Start Exam
// -----------------------------
window.onload = () => {

    loadQuestions();

};
// ===========================================
// Part 2 : Display Questions & Navigation
// ===========================================

// -----------------------------
// Display Question
// -----------------------------
function displayQuestion(index) {

    currentQuestion = index;

    const q = questions[index];

    questionNumber.textContent =
        `Question ${index + 1} of ${questions.length}`;

    questionText.textContent = q.question;

    optionsContainer.innerHTML = "";

    q.options.forEach((option, i) => {

        const label = document.createElement("label");

        label.className = "option";

        const input = document.createElement("input");

        input.type = "radio";
        input.name = "option";
        input.value = i;

        if (userAnswers[index] === i) {
            input.checked = true;
        }

        input.addEventListener("change", () => {

            userAnswers[index] = i;

            questionStatus[index] = "answered";

            updatePalette();

        });

        const span = document.createElement("span");

        span.textContent = option;

        label.appendChild(input);
        label.appendChild(span);

        optionsContainer.appendChild(label);

    });

    updatePalette();

}

// -----------------------------
// Create Question Palette
// -----------------------------
function createPalette() {

    palette.innerHTML = "";

    questions.forEach((q, index) => {

        const button = document.createElement("button");

        button.textContent = index + 1;

        button.addEventListener("click", () => {

            currentQuestion = index;

            if (questionStatus[index] === "not-visited") {
                questionStatus[index] = "not-answered";
            }

            displayQuestion(index);

        });

        palette.appendChild(button);

    });

}

// -----------------------------
// Update Palette
// -----------------------------
function updatePalette() {

    const buttons = palette.querySelectorAll("button");

    buttons.forEach((button, index) => {

        button.className = "";

        if (questionStatus[index] === "answered") {

            button.classList.add("answered");

        }

        else if (questionStatus[index] === "review") {

            button.classList.add("review");

        }

        else if (questionStatus[index] === "not-answered") {

            button.classList.add("notanswered");

        }

        else {

            button.classList.add("notvisited");

        }

        if (index === currentQuestion) {

            button.classList.add("current");

        }

    });

    updateProgress();

    saveExam();

}

// -----------------------------
// Previous Button
// -----------------------------
prevBtn.addEventListener("click", () => {

    if (currentQuestion > 0) {

        currentQuestion--;

        displayQuestion(currentQuestion);

    }

});

// -----------------------------
// Save & Next Button
// -----------------------------
saveNextBtn.addEventListener("click", () => {

    if (userAnswers[currentQuestion] === null) {

        questionStatus[currentQuestion] = "not-answered";

    } else {

        questionStatus[currentQuestion] = "answered";

    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        if (questionStatus[currentQuestion] === "not-visited") {

            questionStatus[currentQuestion] = "not-answered";

        }

        displayQuestion(currentQuestion);

    }

});
// ===========================================
// Part 3 : Review, Clear, Progress & Auto Save
// ===========================================

// -----------------------------
// Mark for Review
// -----------------------------
reviewBtn.addEventListener("click", () => {

    questionStatus[currentQuestion] = "review";

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        if (questionStatus[currentQuestion] === "not-visited") {

            questionStatus[currentQuestion] = "not-answered";

        }

        displayQuestion(currentQuestion);

    } else {

        updatePalette();

    }

});

// -----------------------------
// Clear Response
// -----------------------------
clearBtn.addEventListener("click", () => {

    userAnswers[currentQuestion] = null;

    questionStatus[currentQuestion] = "not-answered";

    displayQuestion(currentQuestion);

});

// -----------------------------
// Update Progress Bar
// -----------------------------
function updateProgress() {

    const answered = questionStatus.filter(
        status => status === "answered"
    ).length;

    progressText.textContent =
        `${answered} / ${questions.length} Answered`;

    const percentage =
        (answered / questions.length) * 100;

    progressFill.style.width = percentage + "%";

}

// -----------------------------
// Save Exam to LocalStorage
// -----------------------------
function saveExam() {

    const examData = {

        answers: userAnswers,

        status: questionStatus,

        currentQuestion: currentQuestion,

        timeLeft: timeLeft

    };

    localStorage.setItem(
        "currentExam",
        JSON.stringify(examData)
    );

}

// -----------------------------
// Restore Exam
// -----------------------------
function restoreExam() {

    const saved =
        localStorage.getItem("currentExam");

    if (!saved) return;

    const examData = JSON.parse(saved);

    userAnswers =
        examData.answers || userAnswers;

    questionStatus =
        examData.status || questionStatus;

    currentQuestion =
        examData.currentQuestion || 0;

    timeLeft =
        examData.timeLeft || EXAM_DURATION;

    displayQuestion(currentQuestion);

}

// -----------------------------
// Save Automatically
// -----------------------------
setInterval(() => {

    saveExam();

}, 5000);
// ===========================================
// Part 4 : Timer, Submit & Result
// ===========================================

// -----------------------------
// Start Timer
// -----------------------------
function startTimer() {

    const interval = setInterval(() => {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        timer.textContent =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        if (timeLeft <= 0) {

            clearInterval(interval);

            alert("Time is over! Your test will be submitted.");

            submitExam();

            return;
        }

        timeLeft--;

        saveExam();

    }, 1000);

}

// -----------------------------
// Submit Button
// -----------------------------
submitBtn.addEventListener("click", () => {

    const confirmSubmit = confirm(
        "Are you sure you want to submit the exam?"
    );

    if (confirmSubmit) {

        submitExam();

    }

});

// -----------------------------
// Submit Exam
// -----------------------------
function submitExam() {

    let correct = 0;
    let wrong = 0;
    let attempted = 0;

    questions.forEach((question, index) => {

        if (userAnswers[index] !== null) {

            attempted++;

            if (userAnswers[index] === question.answer) {
                correct++;
            } else {
                wrong++;
            }

        }

    });

    const notAttempted = questions.length - attempted;

    const percentage = (
        (correct / questions.length) * 100
    ).toFixed(2);

    const result = {

        candidate: candidateName.textContent,

        submittedAt: new Date().toLocaleString(),

        questions: questions,

        userAnswers: userAnswers,

        questionStatus: questionStatus,

        totalQuestions: questions.length,

        attempted: attempted,

        notAttempted: notAttempted,

        correct: correct,

        wrong: wrong,

        marks: correct,

        percentage: percentage

    };

    localStorage.setItem(
        "examResult",
        JSON.stringify(result)
    );

    localStorage.removeItem("currentExam");

    window.location.href = "result.html";

}
