document.getElementById("resetBtn").addEventListener("click",()=>{

const newPassword=document.getElementById("newPassword").value.trim();

const confirmPassword=document.getElementById("confirmPassword").value.trim();

if(newPassword==="" || confirmPassword===""){

alert("Please fill all fields.");

return;

}

if(newPassword.length<6){

alert("Password must be at least 6 characters.");

return;

}

if(newPassword!==confirmPassword){

alert("Passwords do not match.");

return;

}

const user=JSON.parse(localStorage.getItem("jobsetuUser"));

user.password=newPassword;

localStorage.setItem("jobsetuUser",JSON.stringify(user));

alert("Password Updated Successfully!");

window.location.href="index.html";

});
