document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.querySelector('input[type="text"]').value.trim();
        const password = document.querySelector('input[type="password"]').value.trim();

        if (username === "" || password === "") {

            alert("Please enter Username and Password");

            return;
        }

        // Save login status
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);

        // Redirect to dashboard
        window.location.href = "test.html";

    });

});
