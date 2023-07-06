//Code to ensure the Javascript code is executed only after the page has been loaded
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', handleSignup);
  });
  



  


  //Defining handleSignup function
function handleSignup(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const package = document.getElementById('package').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Check if passwords match
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Create an object with the user's signup details
  const userDetails = {
    username,
    email,
    phone,
    package,
    password
  };

  // Send the signup details to the server
  saveSignupDetails(userDetails);
}






//Adding the saveSignupDetails function
function saveSignupDetails(userDetails) {
    const url = 'http://localhost:3000/users'; // Replace with your server endpoint
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userDetails)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log('Signup details saved:', data);
      })
      .catch(error => {
        console.error('Error saving signup details:', error);
      });
  }
  


  //