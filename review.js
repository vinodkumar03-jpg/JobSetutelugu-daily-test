// ==========================================
// JobSetu Telugu - Review Answers
// ==========================================

// -------------------------
// HTML Elements
// -------------------------
const totalQuestions = document.getElementById("totalQuestions");
const correctAnswers = document.getElementById("correctAnswers");
const wrongAnswers = document.getElementById("wrongAnswers");
const notAttempted = document.getElementById("notAttempted");

const questionsContainer =
document.getElementById("questionsContainer");

const dashboardBtn =
document.getElementById("dashboardBtn");

// -------------------------
// Load Result
// -------------------------
function loadReview() {

    const result =
    JSON.parse(localStorage.getItem("examResult"));

    if (!result) {

        alert("No review data found.");

        window.location.href = "dashboard.html";

        return;

    }

    totalQuestions.textContent =
    result.totalQuestions;

    correctAnswers.textContent =
    result.correct;

    wrongAnswers.textContent =
    result.wrong;

    notAttempted.textContent =
    result.notAttempted;

    displayQuestions(result);

}

// -------------------------
// Display Questions
// -------------------------
function displayQuestions(result){

    questionsContainer.innerHTML="";

    result.questions.forEach((question,index)=>{

        const card=document.createElement("div");

        card.className="question-card";

        let optionsHTML="";

        question.options.forEach((option,i)=>{

            let className="option";

            if(i===question.answer){

                className+=" correct";

            }

            if(result.userAnswers[index]===i){

                if(i===question.answer){

                    className+=" selected";

                }else{

                    className+=" wrong";

                }

            }

            optionsHTML+=`

            <div class="${className}">

                ${String.fromCharCode(65+i)}.
                ${option}

            </div>

            `;

        });

        let statusHTML="";

        if(result.userAnswers[index]===null){

            statusHTML=
            `<span class="status notattempted">
            Not Attempted
            </span>`;

        }
        else if(
            result.userAnswers[index]===question.answer
        ){

            statusHTML=
            `<span class="status correct">
            Correct
            </span>`;

        }
        else{

            statusHTML=
            `<span class="status wrong">
            Wrong
            </span>`;

        }

        card.innerHTML=`

        <h3>

        Question ${index+1}

        </h3>

        <p style="margin-bottom:15px;">

        ${question.question}

        </p>

        ${optionsHTML}

        ${statusHTML}

        `;

        questionsContainer.appendChild(card);

    });

}

// -------------------------
// Dashboard
// -------------------------
dashboardBtn.addEventListener("click",()=>{

    window.location.href="dashboard.html";

});

// -------------------------
// Initialize
// -------------------------
window.onload=()=>{

    loadReview();

};
