let currentQuestion = 0;
let questions = [];
let answers = [];

document.getElementById("student").innerHTML =
"Welcome, " + localStorage.getItem("studentName");

fetch("questions.json")
.then(response => response.json())
.then(data => {
    questions = data;
    showQuestion();
});

function showQuestion(){

    let q = questions[currentQuestion];

    document.getElementById("question").innerHTML =
    "Q" + (currentQuestion + 1) + ". " + q.question;

    let html = "";

    q.options.forEach((option,index)=>{

        html += `
        <div class="option">
            <input type="radio"
                   name="answer"
                   value="${index}"
                   ${answers[currentQuestion]==index ? "checked":""}>
            ${option}
        </div>
        `;

    });

    document.getElementById("options").innerHTML = html;

}

function nextQuestion(){

    let selected =
    document.querySelector('input[name="answer"]:checked');

    if(selected){

        answers[currentQuestion] =
        Number(selected.value);

    }

    currentQuestion++;

    if(currentQuestion >= questions.length){

        localStorage.setItem("answers",
        JSON.stringify(answers));

        window.location.href="result.html";

        return;

    }

    showQuestion();

}
