 function startTest() {

    let name = document.querySelector("input[type='text']").value;

    if(name==""){
        alert("Please enter your Name");
        return;
    }

    alert("Welcome " + name + "!\n\nYour test will start soon.");

}
