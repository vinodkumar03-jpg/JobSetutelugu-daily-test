function startTest() {

    let name = document.getElementById("studentName").value;
    let mobile = document.getElementById("mobileNumber").value;

    if(name.trim()==""){
        alert("Please enter your Name");
        return;
    }

    if(mobile.length!=10 || isNaN(mobile)){
        alert("Please enter a valid 10-digit Mobile Number");
        return;
    }

    localStorage.setItem("studentName",name);
    localStorage.setItem("mobile",mobile);

    window.location.href="test.html";

}
