

//Functin to direct people to Signup page 
document.getElementById("packageDropdown").addEventListener("change", function() {
  let selectedValue = this.value;

  switch (selectedValue) {
    case "basic":
      window.location.href = "signup.html";
      break;
    case "standard":
      window.location.href = "signup.html";
      break;
    case "premium":
      window.location.href = "signup.html";
      break;
    default:
      break;
  }
});
















// index.js

document.addEventListener("DOMContentLoaded", getUsers);

async function getUsers() {
  try {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    const usersList = document.getElementById("theusers");
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.username;
      usersList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}














//directing to login page when click any part of the users
let usersSection = document.getElementById('users');

usersSection.addEventListener('click', function() {
  window.location.href = 'login.html';
});







//Directing to Admin logn page when clicked
// Get the section element
const adminPanel = document.getElementById('adminPanel');

// Add an event listener for the click event
adminPanel.addEventListener('click', function() {
  // Redirect to adminlogin.html
  window.location.href = 'adminlogin.html';
});