document.getElementById("sendOtpBtn").addEventListener("click", () => {

    const email = document.getElementById("email").value.trim();

    if(email===""){

        alert("Please enter your registered email.");

        return;

    }

    const savedUser = JSON.parse(localStorage.getItem("jobsetuUser"));

    if(!savedUser){

        alert("No account found.");

        return;

    }

    if(email!==savedUser.email){

        alert("Email not registered.");

        return;

    }

  // Save a demo OTP
localStorage.setItem("jobsetuOTP", "123456");

// Save entered email
localStorage.setItem("resetEmail", email);

// Go to OTP page
window.location.href = "otp-verification.html";

});
