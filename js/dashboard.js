// ======================================
// MAGIC MENU
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const magicItems = document.querySelectorAll(".magic-item");
const pageContent = document.querySelector(".page-content");

let menuOpen = false;

menuBtn.addEventListener("click", () => {

    menuOpen = !menuOpen;

    if (menuOpen) {

        pageContent.classList.add("menu-open");

    } else {

        pageContent.classList.remove("menu-open");

    }

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

const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {

    themeBtn.onclick = () => {

        alert("Dark Mode Coming Soon");

    };

}

// ======================================
// NOTIFICATIONS
// ======================================

const notificationBtn = document.querySelector(".notification-btn");

if (notificationBtn) {

    notificationBtn.onclick = () => {

        alert("No New Notifications");

    };

}

// ======================================
// LOGOUT
// ======================================

const logoutBtn = document.querySelector(".magic-item.logout");

if (logoutBtn) {

    logoutBtn.onclick = () => {

        if (confirm("Are you sure you want to logout?")) {

            window.location.href = "index.html";

        }

    };

}
