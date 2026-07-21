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
        <label class="option">

            <input
                type="radio"
                name="answer"
                value="${index}"
                ${answers[currentQuestion] == index ? "checked" : ""}>

            <span>${option}</span>

        </label>
        `;

    });

    document.getElementById("options").innerHTML = html;

    // Highlight selected option when clicked
    document.querySelectorAll(".option").forEach(option => {

        option.addEventListener("click", function(){

            document.querySelectorAll(".option").forEach(o=>{
                o.classList.remove("selected");
            });

            this.classList.add("selected");

            this.querySelector("input").checked = true;

        });

    });

    // If already answered, highlight it
    let checked =
    document.querySelector('input[name="answer"]:checked');

    if(checked){

        checked.parentElement.classList.add("selected");

    }

    let btn = document.getElementById("nextBtn");

    if (currentQuestion == questions.length - 1) {

        btn.innerHTML = "Finish Test";

    } else {

        btn.innerHTML = "Next";

    }

    loadPalette();

}
