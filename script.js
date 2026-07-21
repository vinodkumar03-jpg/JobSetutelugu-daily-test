function startTest() {

    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    // Name Validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Mobile Validation
    if (mobile === "") {
        alert("Please enter your mobile number.");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Save Student Details
    localStorage.setItem("studentName", name);
    localStorage.setItem("mobile", mobile);

    // Reset Previous Test Data
    localStorage.removeItem("answers");
    localStorage.removeItem("testSubmitted");

    // Open Test Page
    window.location.href = "test.html";
}
