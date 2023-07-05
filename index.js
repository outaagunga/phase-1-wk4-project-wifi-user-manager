// Fetch users from the local API
fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(users => {
    // Get the users section and the users list
    const usersSection = document.getElementById('users');
    const usersList = document.getElementById('theusers');

    // Create a list item for each user
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      usersList.appendChild(listItem);
    });

    // Append the users list to the users section
    usersSection.appendChild(usersList);
  })
  .catch(error => {
    console.error('Error fetching users:', error);
  });


//Signup page 
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


