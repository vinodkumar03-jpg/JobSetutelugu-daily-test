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

    alert("Login Successful!");

    // Redirect to Dashboard later
    // window.location.href = "dashboard.html";

});

// Register Button

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function () {
    window.location.href = "register.html";
});
