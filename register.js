// JobSetu Telugu - Registration

document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Empty Validation
        if (
            fullname === "" ||
            email === "" ||
            mobile === "" ||
            username === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            alert("Please fill all fields.");
            return;
        }

        // Mobile Validation
        if (!/^[0-9]{10}$/.test(mobile)) {
            alert("Enter a valid 10-digit mobile number.");
            return;
        }

        // Password Validation
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Load existing users
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check duplicate username
        const exists = users.find(user => user.username === username);

        if (exists) {
            alert("Username already exists.");
            return;
        }

        // Save user
        const newUser = {
            fullname,
            email,
            mobile,
            username,
            password
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Account Created Successfully!");

        window.location.href = "index.html";

    });

});
