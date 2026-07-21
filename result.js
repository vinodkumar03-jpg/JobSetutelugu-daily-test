let answers = JSON.parse(localStorage.getItem("answers"));
let resultDiv = document.getElementById("result");

fetch("questions.json")
.then(response => response.json())
.then(data => {

    let questions = data;
    let score = 0;
    let html = "";

    questions.forEach((q, index) => {

        let userAnswer =
            answers[index] != undefined
            ? q.options[answers[index]]
            : "Not Attempted";

        let correctAnswer =
            q.options[q.answer];

        let isCorrect =
            answers[index] == q.answer;

        if(isCorrect)
            score++;

        html += `

        <div class="result-card">

        <h2>
        ${isCorrect ? "✅ Correct" : "❌ Incorrect"}
        </h2>

        <h3>Question ${index+1}</h3>

        <p>
        <b>Question :</b><br>
        ${q.question}
        </p>

        <p style="color:${isCorrect ? "limegreen" : "red"};">
        <b>Your Answer :</b>
        ${userAnswer}
        </p>

        ${
            !isCorrect ?
            `
            <p style="color:limegreen;">
            <b>Correct Answer :</b>
            ${correctAnswer}
            </p>
            `
            :
            ""
        }

        <p>
        <b>Explanation :</b>
        ${q.explanation}
        </p>

        <hr>

        </div>

        `;

    });

    document.getElementById("score").innerHTML =
    `Your Score : ${score} / ${questions.length}`;

    resultDiv.innerHTML = html;

});
