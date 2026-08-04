// ======================================
// ACCOUNT SIDEBAR
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const accountSidebar = document.querySelector(".account-sidebar");
const closeBtn = document.querySelector(".close-account");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click",()=>{

    accountSidebar.classList.add("active");
    overlay.classList.add("active");

});

closeBtn.addEventListener("click",()=>{

    accountSidebar.classList.remove("active");
    overlay.classList.remove("active");

});

overlay.addEventListener("click",()=>{

    accountSidebar.classList.remove("active");
    overlay.classList.remove("active");

});


// ======================================
// THEME
// ======================================

document.querySelector(".theme-btn").onclick=()=>{

    alert("Dark Mode Coming Soon");

};


// ======================================
// NOTIFICATIONS
// ======================================

document.querySelector(".notification-btn").onclick=()=>{

    alert("No New Notifications");

};


// ======================================
// LOGOUT
// ======================================

document.querySelector(".logout-btn").onclick=()=>{

    if(confirm("Are you sure you want to logout?")){

        window.location.href="index.html";

    }

};
