function startTest() {

    let name = document.getElementById("studentName").value;
    let mobile = document.getElementById("mobileNumber").value;

    if (name.trim() === "") {
        alert("Please enter your Name");
        return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Please enter a valid 10-digit Mobile Number");
        return;
    }

    alert("Welcome " + name + "!\n\nYour test will start soon.");

}
