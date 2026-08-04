// ======================================
// MAGIC MENU
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const magicItems = document.querySelectorAll(".magic-item");
const pageContent = document.querySelector(".page-content");

let menuOpen = false;

menuBtn.addEventListener("click", () => {

    menuOpen = !menuOpen;

    magicItems.forEach((item, index) => {

        setTimeout(() => {

            if (menuOpen) {

                item.classList.add("show");

            } else {

                item.classList.remove("show");

            }

        }, index * 120);

    });

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

const logoutBtn = document.querySelector(".magic-item.logout");

logoutBtn.onclick = () => {

    if (confirm("Are you sure you want to logout?")) {

        window.location.href = "index.html";

    }

};
