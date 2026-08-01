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

    alert("OTP functionality will be added with Firebase.\n\nEmail Verified Successfully.");

});
