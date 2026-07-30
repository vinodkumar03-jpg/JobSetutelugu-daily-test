document.addEventListener("DOMContentLoaded", () => {

    // ============================
    // Check Login Session
    // ============================

    if (localStorage.getItem("loggedIn") === "true") {

        // If already logged in, go to Dashboard
        window.location.href = "dashboard.html";
        return;
    }

    // ============================
    // Login Form
    // ============================

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const username = document
                .querySelector('input[type="text"]')
                .value
                .trim();

            const password = document
                .querySelector('input[type="password"]')
                .value;

            if (username === "" || password === "") {

                alert("Please enter Username and Password.");
                return;

            }

            const users =
                JSON.parse(localStorage.getItem("users")) || [];

            const validUser = users.find(user =>
                user.username === username &&
                user.password === password
            );

            if (!validUser) {

                alert("Invalid Username or Password!");
                return;

            }

            // Save Login Session

            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("username", validUser.username);
            localStorage.setItem("fullname", validUser.fullname);

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        });

    }

    // ============================
    // Create Account
    // ============================

    const createBtn =
        document.getElementById("createAccountBtn");

    if (createBtn) {

        createBtn.addEventListener("click", function () {

            window.location.href = "register.html";

        });

    }

});

// ============================
// Logout Function
// ============================

function logout() {

    if (confirm("Are you sure you want to logout?")) {

        localStorage.removeItem("loggedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("fullname");

        window.location.href = "index.html";

    }

}
