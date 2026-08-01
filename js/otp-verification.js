const otpInputs=document.querySelectorAll(".otp");

otpInputs.forEach((input,index)=>{

input.addEventListener("input",()=>{

if(input.value.length===1 && index<otpInputs.length-1){

otpInputs[index+1].focus();

}

});

});

let time=60;

const countdown=document.getElementById("countdown");

setInterval(()=>{

if(time>0){

time--;

countdown.textContent=time;

}

},1000);

document.getElementById("verifyBtn").addEventListener("click",()=>{

let enteredOTP="";

otpInputs.forEach(box=>{

enteredOTP+=box.value;

});

const savedOTP=localStorage.getItem("jobsetuOTP");

if(enteredOTP===savedOTP){

alert("OTP Verified Successfully!");

window.location.href="reset-password.html";

}

else{

alert("Invalid OTP");

}

});

document.getElementById("resendBtn").addEventListener("click",()=>{

localStorage.setItem("jobsetuOTP","123456");

alert("OTP Resent Successfully!");

});
