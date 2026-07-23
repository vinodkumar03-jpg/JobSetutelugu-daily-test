document.addEventListener("DOMContentLoaded", () => {

    // If user is already logged in
    if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "test.html";
        return;
    }

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.querySelector('input[type="text"]').value.trim();
        const password = document.querySelector('input[type="password"]').value;

        if (username === "" || password === "") {
            alert("Please enter Username and Password.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const validUser = users.find(user =>
            user.username === username &&
            user.password === password
        );

        if (!validUser) {
            alert("Invalid Username or Password!");
            return;
        }

        // Save login session
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", validUser.username);
        localStorage.setItem("fullname", validUser.fullname);

        alert("Login Successful!");

        window.location.href = "test.html";

    });

    // Create Account button
    const createBtn = document.getElementById("createAccountBtn");

    if (createBtn) {
        createBtn.addEventListener("click", function () {
            window.location.href = "register.html";
        });
    }

});
