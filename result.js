// ===========================================
// JobSetu Telugu - Result Page
// ===========================================

// -----------------------------
// HTML Elements
// -----------------------------
const candidateName = document.getElementById("candidateName");
const submittedTime = document.getElementById("submittedTime");

const percentage = document.getElementById("percentage");
const status = document.getElementById("status");

const totalQuestions = document.getElementById("totalQuestions");
const attempted = document.getElementById("attempted");
const notAttempted = document.getElementById("notAttempted");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
const marks = document.getElementById("marks");

const dashboardBtn = document.getElementById("dashboardBtn");
const reviewBtn = document.getElementById("reviewBtn");

// -----------------------------
// Load Result
// -----------------------------
function loadResult() {

    const result =
        JSON.parse(localStorage.getItem("examResult"));

    if (!result) {

        alert("No result found.");

        window.location.href = "dashboard.html";

        return;

    }

    candidateName.textContent = result.candidate;

    submittedTime.textContent =
        "Submitted : " + result.submittedAt;

    percentage.textContent =
        result.percentage + "%";

    totalQuestions.textContent =
        result.totalQuestions;

    attempted.textContent =
        result.attempted;

    notAttempted.textContent =
        result.notAttempted;

    correct.textContent =
        result.correct;

    wrong.textContent =
        result.wrong;

    marks.textContent =
        result.marks;

    // Pass / Fail
    if (parseFloat(result.percentage) >= 35) {

        status.textContent = "PASS";
        status.style.color = "#2E7D32";

    } else {

        status.textContent = "FAIL";
        status.style.color = "#D32F2F";

    }

}

// -----------------------------
// Dashboard Button
// -----------------------------
dashboardBtn.addEventListener("click", () => {

    window.location.href = "dashboard.html";

});

// -----------------------------
// Review Button
// -----------------------------
reviewBtn.addEventListener("click", () => {

    alert("Review Answers module will be added in the next update.");

});

// -----------------------------
// Initialize
// -----------------------------
window.onload = () => {

    loadResult();

};
