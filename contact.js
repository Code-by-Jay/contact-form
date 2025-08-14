
// script.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from submitting by default

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Get error message divs
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let valid = true;

    // Validate name
    if (name === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    // Validate email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    }

    // Validate message
    if (message === "") {
        messageError.textContent = "Message is required";
        valid = false;
    } else if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters";
        valid = false;
    }

    // If form is valid, show success message
    if (valid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
});
