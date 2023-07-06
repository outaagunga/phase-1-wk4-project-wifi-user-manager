//Function to target admin input in the admin login form and authenticate login if the details match the ones saved in admin database
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the login form and attach an event listener
    let loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Retrieve the entered username and password
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      
      // Prepare the request to check login credentials
      fetch('http://localhost:3000/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error occurred. Please try again later.');
        }
      })
      .then(data => {
        if (data.username === username && data.password === password) {
          // Redirect to adminpanel.html
          window.location.href = 'adminpanel.html';
        } else {
          // Incorrect username or password
          alert('Please enter correct details');
        }
      })
      .catch(error => {
        alert(error.message);
      });
    });
  });
  