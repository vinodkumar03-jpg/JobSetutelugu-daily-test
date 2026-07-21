let currentQuestion = 0;

let questions = [];

document.getElementById("student").innerHTML =
"Welcome " + localStorage.getItem("studentName");

fetch("questions.json")
.then(res => res.json())
.then(data=>{

questions=data;

showQuestion();

});

function showQuestion(){

document.getElementById("question").innerHTML=
questions[currentQuestion].question;

let html="";

questions[currentQuestion].options.forEach((option,index)=>{

html += `
<div class="option" onclick="selectAnswer(${index})">
${option}
</div>
`;

});

document.getElementById("options").innerHTML=html;

}

function selectAnswer(answer){

alert("Selected Option : "+answer);

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion>=questions.length){

alert("Test Completed");

return;

}

showQuestion();

}
