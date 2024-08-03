function handleSubmit() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Validate form values
    if (name && email) {
        // Display form data
        document.getElementById("formResult").innerHTML = 
            "<strong>Form submitted successfully!</strong><br>" +
            "Name: " + name + "<br>" +
            "Email: " + email;
    } else {
        document.getElementById("formResult").innerText = "Please fill out all fields.";
    }
}    
