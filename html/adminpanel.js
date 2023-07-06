// fuction to target and authenticate admin login page

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Make a POST request to authenticate the login
    fetch('http://localhost:3000/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.authenticated) {
        // Successful login, redirect to adminpanel.html
        window.location.href = 'adminpanel.html';
      } else {
        // Incorrect username or password, display error message
        alert('Please enter correct details');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred during login. Please try again later.');
    });
  });
  







  //
  document.addEventListener('DOMContentLoaded', () => {
    const usersList = document.getElementById('users-list');
  
    // Fetch users from the server
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        // Loop through the users
        data.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = `${user.name} - ${user.status}`;
  
          // Create block/unblock button for each user
          const blockButton = document.createElement('button');
          blockButton.textContent = 'Block';
          blockButton.addEventListener('click', () => {
            // Update user status to 'blocked' on the server
            updateUserStatus(user.id, 'blocked')
              .then(() => {
                // Update UI to reflect the change
                listItem.textContent = `${user.name} - blocked`;
              })
              .catch(error => {
                console.error('Error updating user status:', error);
              });
          });
  
          const unblockButton = document.createElement('button');
          unblockButton.textContent = 'Unblock';
          unblockButton.addEventListener('click', () => {
            // Update user status to 'active' on the server
            updateUserStatus(user.id, 'active')
              .then(() => {
                // Update UI to reflect the change
                listItem.textContent = `${user.name} - active`;
              })
              .catch(error => {
                console.error('Error updating user status:', error);
              });
          });
  
          // Append buttons to the list item
          listItem.appendChild(blockButton);
          listItem.appendChild(unblockButton);
  
          // Append list item to the users list
          usersList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  
    // Function to update user status on the server
    function updateUserStatus(userId, status) {
      const url = `http://localhost:3000/users/${userId}`;
      const data = { status: status };
  
      return fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    }
  });
  