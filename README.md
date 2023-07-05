# phase-1-wk4-project-wifi-user-manager
This is a project for week 4_ Where I decided to do a project on WIFI clients user manager



#Here is my index.js code
// Fetch client data from the API
function fetchClients() {
  // Make API request to fetch connected clients
  fetch('http://localhost:3000/api/clients')
    .then(response => response.json())
    .then(data => {
      // Process the data and update the client list on the page
      const clientsList = document.getElementById('clients');
      clientsList.innerHTML = '';
      data.results.forEach(client => {
        const clientItem = document.createElement('li');
        clientItem.textContent = client.name;
        clientItem.addEventListener('click', () => {
          showClientDetails(client.id);
        });
        clientsList.appendChild(clientItem);
      });
    })
    .catch(error => {
      console.log('Error fetching clients:', error);
    });
}

// Display client details
function showClientDetails(clientId) {
  // Make API request to fetch client details
  fetch(`http://localhost:3000/api/clients/${clientId}`)
    .then(response => response.json())
    .then(client => {
      // Update the client details section on the page
      const clientInfo = document.getElementById('client-info');
      clientInfo.innerHTML = `
        <p><strong>Name:</strong> ${client.name}</p>
        <p><strong>Status:</strong> ${client.status}</p>
        <!-- Add more client details as needed -->
      `;
    })
    .catch(error => {
      console.log('Error fetching client details:', error);
    });
}

// Rest of the code...

// Rest of the code...

// Handle blocking/unblocking a client
function handleBlockUnblock(event) {
  event.preventDefault();
  const clientId = event.target.dataset.clientId;
  const action = event.target.dataset.action;

  // Make API request to block/unblock the client
  // Example:
  fetch(`http://localhost:3000/api/clients/${clientId}/${action}`, { method: 'PUT' })
    .then(response => response.json())
    .then(data => {
      // Handle success or error message based on the API response
      console.log('Block/Unblock response:', data);
      // Refresh the client list and details
      fetchClients();
      showClientDetails(clientId);
    })
    .catch(error => {
      console.log('Error blocking/unblocking client:', error);
    });
}

// Fetch user profile data from the API
function fetchUserProfile() {
  // Make API request to fetch user profile
  // Example:
  fetch('http://localhost:3000/api/profile')
    .then(response => response.json())
    .then(profile => {
      // Update the user profile section on the page
      const userInfo = document.getElementById('user-info');
      userInfo.innerHTML = `
        <p><strong>Name:</strong> ${profile.name}</p>
        <p><strong>Email:</strong> ${profile.email}</p>
        <!-- Add more user profile information as needed -->
      `;
    })
    .catch(error => {
      console.log('Error fetching user profile:', error);
    });
}

// Update user profile
function updateProfile(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const updatedProfile = {
    name: formData.get('name'),
    email: formData.get('email'),
    // Add more fields if needed
  };

  // Make API request to update the user profile
  // Example:
  fetch('http://localhost:3000/api/user/profile', {
    method: 'PUT',
    body: JSON.stringify(updatedProfile),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      // Handle success or error message based on the API response
      console.log('Update profile response:', data);
      // Display a success message or update the UI as needed
    })
    .catch(error => {
      console.log('Error updating user profile:', error);
    });
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
  fetchClients();
  fetchUserProfile();

  // Event listener for blocking/unblocking a client
  const blockUnblockForm = document.getElementById('block-unblock-form');
  blockUnblockForm.addEventListener('submit', handleBlockUnblock);

  // Event listener for updating the user profile
  const editProfileForm = document.getElementById('edit-profile-form');
  editProfileForm.addEventListener('submit', updateProfile);
});
