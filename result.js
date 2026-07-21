let answers =
JSON.parse(localStorage.getItem("answers"));

fetch("questions.json")

.then(res=>res.json())

.then(questions=>{

let score = 0;

let html = "";

questions.forEach((q,index)=>{

if(answers[index] == q.answer){

score++;

}

html += `
<hr>

<h3>Question ${index+1}</h3>

<p>${q.question}</p>

<p>
<b>Your Answer :</b>

${answers[index]!==undefined
? q.options[answers[index]]
: "Not Answered"}

</p>

<p>

<b>Correct Answer :</b>

${q.options[q.answer]}

</p>

<p>

<b>Explanation :</b>

${q.explanation}

</p>

`;

});

document.getElementById("score").innerHTML =
"Your Score : " + score + " / " + questions.length;

document.getElementById("review").innerHTML =
html;

});
