// =======================================
// JobSetu Telugu Login JavaScript
// =======================================

// Show / Hide Password

const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        toggle.classList.remove("fa-eye");
        toggle.classList.add("fa-eye-slash");

    } else {

        password.type = "password";
        toggle.classList.remove("fa-eye-slash");
        toggle.classList.add("fa-eye");

    }

});

// Login Button

document.getElementById("loginBtn").addEventListener("click", () => {

    const username = document.getElementById("username").value.trim();
    const pass = password.value.trim();

    if (username === "" || pass === "") {

        alert("Please enter Username and Password.");
        return;

    }

    // Get user from Local Storage
    const savedUser = JSON.parse(localStorage.getItem("jobsetuUser"));

    if (!savedUser) {

        alert("No account found.\n\nPlease create an account first.");

        return;

    }

    if (
        username === savedUser.username &&
        pass === savedUser.password
    ) {

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Username or Password.");

    }

});
// =======================================
// Register Button
// =======================================

const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

    registerBtn.addEventListener("click", () => {

        window.location.href = "register.html";

    });

}
// =======================================
// Forgot Password
// =======================================

const forgotPassword = document.getElementById("forgotPassword");

if (forgotPassword) {

    forgotPassword.addEventListener("click", function (e) {

        e.preventDefault();

        window.location.href = "forgot-password.html";

    });

}
