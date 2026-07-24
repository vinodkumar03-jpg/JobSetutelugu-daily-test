/* ===========================================
   USER NAME
=========================================== */

const username = localStorage.getItem("fullname") || "Guest";
document.getElementById("username").textContent = username;


/* ===========================================
   MOCK TEST DATA
=========================================== */

const tests = [

{
    id:1,
    title:"TGPSC Mock Test 01",
    subject:"General Studies",
    questions:100,
    duration:"90 Minutes",
    difficulty:"Medium",
    category:"Mock Tests"
},

{
    id:2,
    title:"TGPSC Mock Test 02",
    subject:"Indian Polity",
    questions:100,
    duration:"90 Minutes",
    difficulty:"Easy",
    category:"Mock Tests"
},

{
    id:3,
    title:"TGPSC Mock Test 03",
    subject:"Indian Economy",
    questions:100,
    duration:"90 Minutes",
    difficulty:"Hard",
    category:"Mock Tests"
},

{
    id:4,
    title:"Chapter Test 01",
    subject:"Telangana History",
    questions:25,
    duration:"20 Minutes",
    difficulty:"Easy",
    category:"Chapter Tests"
},

{
    id:5,
    title:"Chapter Test 02",
    subject:"Geography",
    questions:25,
    duration:"20 Minutes",
    difficulty:"Medium",
    category:"Chapter Tests"
},

{
    id:6,
    title:"Grand Test 01",
    subject:"Complete Syllabus",
    questions:100,
    duration:"90 Minutes",
    difficulty:"Hard",
    category:"Grand Tests"
}

];



/* ===========================================
   DISPLAY TESTS
=========================================== */

const container=document.getElementById("testsContainer");

function displayTests(list){

    container.innerHTML="";

    if(list.length===0){

        container.innerHTML=`
        <div style="grid-column:1/-1;text-align:center;padding:60px;">
            <h2>No Mock Tests Found</h2>
        </div>
        `;

        return;
    }

    list.forEach(test=>{

        container.innerHTML+=`

        <div class="test-card">

            <h3>${test.title}</h3>

            <p>
            <i class="fa-solid fa-book"></i>
            ${test.subject}
            </p>

            <p>
            <i class="fa-solid fa-circle-question"></i>
            ${test.questions} Questions
            </p>

            <p>
            <i class="fa-regular fa-clock"></i>
            ${test.duration}
            </p>

            <span class="difficulty">

            ${test.difficulty}

            </span>

            <button
            class="open-btn"
            onclick="openTest(${test.id})">

            Open Test

            </button>

        </div>

        `;

    });

}

displayTests(tests);



/* ===========================================
   SEARCH
=========================================== */

const search=document.getElementById("testSearch");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=tests.filter(test=>

test.title.toLowerCase().includes(value) ||

test.subject.toLowerCase().includes(value)

);

displayTests(filtered);

});



/* ===========================================
   FILTER BUTTONS
=========================================== */

const buttons=document.querySelectorAll(".filters button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const text=button.textContent.trim();

if(text==="Mock Tests"){

displayTests(
tests.filter(t=>t.category==="Mock Tests")
);

}

else if(text==="Chapter Tests"){

displayTests(
tests.filter(t=>t.category==="Chapter Tests")
);

}

else{

displayTests(
tests.filter(t=>t.category==="Grand Tests")
);

}

});

});



/* ===========================================
   SORT
=========================================== */

document.getElementById("sort").addEventListener("change",(e)=>{

let sorted=[...tests];

if(e.target.value==="Oldest"){

sorted.sort((a,b)=>a.id-b.id);

}

else if(e.target.value==="Newest"){

sorted.sort((a,b)=>b.id-a.id);

}

else{

const order={Easy:1,Medium:2,Hard:3};

sorted.sort((a,b)=>order[a.difficulty]-order[b.difficulty]);

}

displayTests(sorted);

});



/* ===========================================
   OPEN TEST
=========================================== */

function openTest(id){

localStorage.setItem("selectedTest",id);

window.location.href="exam.html";

}
