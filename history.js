// ==========================================
// JobSetu Telugu - Test History
// ==========================================

const historyTable = document.getElementById("historyTable");
const dashboardBtn = document.getElementById("dashboardBtn");

function loadHistory(){

    const history =
    JSON.parse(localStorage.getItem("examHistory")) || [];

    if(history.length===0){

        historyTable.innerHTML=`
        <tr>
            <td colspan="7">
                No Test History Available
            </td>
        </tr>
        `;

        return;

    }

    history.forEach((test,index)=>{

        const status =
        parseFloat(test.percentage)>=35
        ? "PASS"
        : "FAIL";

        const row=`

        <tr>

            <td>${index+1}</td>

            <td>${test.examName || "Mock Test"}</td>

            <td>${test.submittedAt}</td>

            <td>${test.marks}</td>

            <td>${test.percentage}%</td>

            <td class="${status==="PASS"?"pass":"fail"}">

                ${status}

            </td>

            <td>

                <button
                    class="review-btn"
                    onclick="viewReview(${index})">

                    View

                </button>

            </td>

        </tr>

        `;

        historyTable.innerHTML += row;

    });

}

function viewReview(index){

    const history =
    JSON.parse(localStorage.getItem("examHistory"));

    localStorage.setItem(
        "examResult",
        JSON.stringify(history[index])
    );

    window.location.href="review.html";

}

dashboardBtn.addEventListener("click",()=>{

    window.location.href="dashboard.html";

});

window.onload=loadHistory;
