// ==========================================
// JobSetu Telugu Dashboard JavaScript
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
// Close Sidebar when clicking outside
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
// Active Sidebar Menu
// ================================

const menuItems = document.querySelectorAll(".sidebar nav li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});


// ================================
// Theme Button (Coming Soon)
// ================================

const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        alert("Dark Mode will be available soon.");

    });

}


// ================================
// Notification Button
// ================================

const notificationBtn = document.querySelector(".notification-btn");

if (notificationBtn) {

    notificationBtn.addEventListener("click", () => {

        alert("No new notifications available.");
    });

}


// ================================
// Logout Button
// ================================

const logoutBtn = document.querySelector(".logout button");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        const confirmLogout = confirm("Are you sure you want to logout?");

        if (confirmLogout) {

            window.location.href = "index.html";

        }

    });

}
