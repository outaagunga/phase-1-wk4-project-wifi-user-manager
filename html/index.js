//Function to display the hidden signup  form
let signupButton = document.getElementById('signup-button');
let signupForm = document.getElementById('signup-form');

// Add an event listener to the signup button
signupButton.addEventListener('click', function() {
  // Change the display property of the signup form to 'block'
  signupForm.style.display = 'block';
});







//Function to display the hidden login form
let loginButton = document.getElementById('login-button');
let loginForm = document.getElementById('loginForm');

// Add an event listener to the signup button
loginButton.addEventListener('click', function() {
  // Change the display property of the signup form to 'block'
  loginForm.style.display = 'block';
});







//Fuction to display signup button when when any package is selected
document.addEventListener('DOMContentLoaded', function() {
    // Get the package dropdown element
    let packageDropdown = document.getElementById('packageDropdown');
    // Get the sign-up form element
    let signUpForm = document.getElementById('signup-form');
    // Get the submit button element
    let submitButton = document.getElementById('submit-button');
    
    // Add event listener for package selection
    packageDropdown.addEventListener('change', function() {
      // Get the selected package value
      let selectedPackage = packageDropdown.value;
      
      // Check if a package is selected
      if (selectedPackage !== '') {
        // Display the sign-up form
        signUpForm.style.display = 'block';
      } else {
        // Hide the sign-up form
        signUpForm.style.display = 'none';
      }
    });
    
    // Add event listener for submit button click
    submitButton.addEventListener('click', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Hide the sign-up form
      signUpForm.style.display = 'none';
    });
  });
  