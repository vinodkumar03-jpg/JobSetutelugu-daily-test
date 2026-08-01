// ===============================
// Show / Hide Password
// ===============================

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.querySelector(".togglePassword");
const toggleConfirm = document.querySelector(".toggleConfirm");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        password.type = "password";
        togglePassword.classList.replace("fa-eye-slash", "fa-eye");
    }

});

toggleConfirm.addEventListener("click", () => {

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        toggleConfirm.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        confirmPassword.type = "password";
        toggleConfirm.classList.replace("fa-eye-slash", "fa-eye");
    }

});

// ===============================
// Registration
// ===============================

document.getElementById("registerBtn").addEventListener("click", () => {

    const fullname = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const passwordValue = password.value;
    const confirmValue = confirmPassword.value;
    const terms = document.getElementById("terms").checked;

    if (
        fullname === "" ||
        username === "" ||
        email === "" ||
        mobile === "" ||
        passwordValue === "" ||
        confirmValue === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Mobile number must contain exactly 10 digits.");
        return;
    }

    if (passwordValue.length < 6) {
        alert("Password should be at least 6 characters long.");
        return;
    }

    if (passwordValue !== confirmValue) {
        alert("Passwords do not match.");
        return;
    }

    if (!terms) {
        alert("Please accept the Terms & Conditions.");
        return;
    }

    const user = {
        fullname,
        username,
        email,
        mobile,
        password: passwordValue
    };

    localStorage.setItem("jobsetuUser", JSON.stringify(user));

alert("Account Created Successfully!\n\nPlease login with your Username and Password.");

window.location.href = "index.html";

});
