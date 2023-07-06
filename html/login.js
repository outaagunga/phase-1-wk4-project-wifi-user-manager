// Serve login page
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', handleLogin);
});

// Handle login form submission
async function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // Fetch user data from JSON server
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    // Find user with matching username and password
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      // Successful login, redirect to customer.html
      window.location.href = '/html/customer.html';
    } else {
      // Incorrect username or password
      alert('Please enter correct details.');
    }
  } catch (error) {
    // Error fetching user data from JSON server
    console.error(error);
    alert('An error occurred. Please try again later.');
  }
}
