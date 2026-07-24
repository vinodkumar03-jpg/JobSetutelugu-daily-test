// ======================================
// JobSetu Telugu Dashboard
// ======================================

// Start Test Button

const startBtn = document.getElementById("startBtn");

if (startBtn) {

    startBtn.addEventListener("click", function () {

        // Smooth Button Animation
        startBtn.innerHTML = "Loading...";
        startBtn.disabled = true;

        setTimeout(() => {

            // Redirect to Exam Page
            // Change this if your exam page has another name

            window.location.href = "exam.html";

        }, 800);

    });

}

// ======================================
// Exam Cards Hover Effect
// ======================================

const examCards = document.querySelectorAll(".exam-card");

examCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 15px 35px rgba(37,99,235,.18)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "0 8px 25px rgba(0,0,0,.05)";

    });

});

// ======================================
// Subject Cards
// ======================================

const subjectCards = document.querySelectorAll(".subject-card");

subjectCards.forEach(card => {

    card.addEventListener("click", () => {

        subjectCards.forEach(c => c.classList.remove("active"));

        card.classList.add("active");

    });

});

// ======================================
// Notification Bell
// ======================================

const notify = document.querySelector(".notify");

if (notify) {

    notify.addEventListener("click", () => {

        alert("No new notifications.");

    });

}

// ======================================
// Profile
// ======================================

const profile = document.querySelector(".profile");

if (profile) {

    profile.addEventListener("click", () => {

        alert("Profile section will be available soon.");

    });

}

// ======================================
// Progress Bar Animation
// ======================================

window.addEventListener("load", () => {

    const progress = document.querySelector(".progress-fill");

    if (progress) {

        progress.style.width = "0%";

        setTimeout(() => {

            progress.style.transition = "1.5s ease";

            progress.style.width = "72%";

        }, 300);

    }

});
