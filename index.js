// main.js
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Perform client-side validation
    if (!username || !email || !password) {
        alert("Please fill in all required fields.");
        return;
    }

    // Send form data to the server for processing
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    })
    .then(function(response) {
        if (response.ok) {
            alert("Registration successful!");
            // Redirect to login page or perform any other actions
        } else {
            alert("Registration failed. Please try again later.");
        }
    })
    .catch(function(error) {
        console.log(error);
        alert("An error occurred. Please try again later.");
    });
});
