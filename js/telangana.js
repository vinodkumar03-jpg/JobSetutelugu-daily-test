// ==========================================
// JobSetu Telugu - Telangana Page
// ==========================================


// ================================
// Mobile Sidebar Toggle
// ================================

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn && sidebar) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("active");

    });

}


// ================================
// Close Sidebar (Mobile)
// ================================

document.addEventListener("click", (e) => {

    if (

        window.innerWidth <= 768 &&

        sidebar.classList.contains("active") &&

        !sidebar.contains(e.target) &&

        !menuBtn.contains(e.target)

    ) {

        sidebar.classList.remove("active");

    }

});


// ================================
// Search Telangana Jobs
// ================================

const searchInput = document.querySelector(".search-box-job input");

const jobCards = document.querySelectorAll(".job-card");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        jobCards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ================================
// Category Click
// ================================

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        const category = card.innerText.trim();

        alert(category + " Jobs page coming soon.");

    });

});


// ================================
// Hero Buttons
// ================================

const latestBtn = document.querySelector(".latest-btn");

if (latestBtn) {

    latestBtn.addEventListener("click", () => {

        document.getElementById("latest-jobs").scrollIntoView({
            behavior: "smooth"

        });
}

const paperBtn = document.querySelector(".paper-btn");

if (paperBtn) {

    paperBtn.addEventListener("click", () => {

        alert("Previous Papers section will be added soon.");

    });

}


// ================================
// Notification Button
// ================================

const notificationBtn = document.querySelector(".notification-btn");

if (notificationBtn) {

    notificationBtn.addEventListener("click", () => {

        alert("Latest Telangana Notifications Updated.");

    });

}


// ================================
// Theme Button
// ================================

const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        alert("Dark Mode Coming Soon.");

    });

}


// ================================
// Logout
// ================================

const logoutBtn = document.querySelector(".logout button");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        if (confirm("Are you sure you want to logout?")) {

            window.location.href = "index.html";

        }

    });

}
