// Function to handle admin login page
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }
});

// Handle login form submission
async function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // Fetch user data from JSON server
    const response = await fetch('http://localhost:3000/admin');
    const admins = await response.json();

    // Find admin with matching username and password
    const admin = admins.find(admin => admin.username === username && admin.password === password);

    if (admin) {
      // Successful login, redirect to admin panel
      window.location.href = '/html/adminpanel.html';
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









//Function to fetch customer details, block or unblock them
// Event listener for blocking/unblocking users
// Fetch subscribers and update the UI
function fetchSubscribers() {
  fetch('http://localhost:3000/users')
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch subscribers');
      }
    })
    .then(function(data) {
      let subscriberList = document.getElementById('subscriberList');

      // Clear the existing subscriber list
      subscriberList.innerHTML = '';

      // Iterate over the fetched data and create list items
      data.forEach(function(subscriber) {
        let listItem = document.createElement('li');

        // Create a span for the subscriber's name
        let nameSpan = document.createElement('span');
        nameSpan.textContent = subscriber.name;
        listItem.appendChild(nameSpan);

        // Create block/unblock button and checkbox
        let blockButton = document.createElement('button');
        blockButton.classList.add('blockButton');
        blockButton.textContent = subscriber.blocked ? 'Unblock' : 'Block';

        let blockCheckbox = document.createElement('input');
        blockCheckbox.type = 'checkbox';
        blockCheckbox.classList.add('blockCheckbox');
        blockCheckbox.checked = subscriber.blocked;

        // Set data attributes for subscriber ID
        blockButton.setAttribute('data-user-id', subscriber.id);
        blockCheckbox.setAttribute('data-user-id', subscriber.id);

        // Add event listener to handle block/unblock actions
        blockButton.addEventListener('click', handleBlockButtonClick);
        blockCheckbox.addEventListener('change', handleBlockCheckboxChange);

        // Append elements to the list item
        listItem.appendChild(nameSpan);
        listItem.appendChild(blockButton);
        listItem.appendChild(blockCheckbox);

        subscriberList.appendChild(listItem);
      });
    })
    .catch(function(error) {
      console.log('Error:', error);
      alert('An error occurred while fetching subscribers. Please try again later.');
    });
}

// Event listener for block button click
function handleBlockButtonClick(event) {
  let target = event.target;
  let userId = target.getAttribute('data-user-id');
  let isBlocked = !target.textContent.toLowerCase().includes('unblock');

  updateSubscriberStatus(userId, isBlocked, target);
}

// Event listener for block checkbox change
function handleBlockCheckboxChange(event) {
  let target = event.target;
  let userId = target.getAttribute('data-user-id');
  let isBlocked = target.checked;

  // Modify the popup message based on the block/unblock action
  let confirmationMessage = isBlocked ? 'Do you want to block the customer?' : 'Do you want to unblock the customer?';

  // Display the confirmation popup
  if (confirm(confirmationMessage)) {
    updateSubscriberStatus(userId, isBlocked, target.nextElementSibling);
  } else {
    // Reset the checkbox state if the user cancels the action
    target.checked = !isBlocked;
  }
}

// Update subscriber status via PATCH or PUT request
function updateSubscriberStatus(userId, isBlocked, elementToUpdate) {
  let url = 'http://localhost:3000/users/' + userId;
  let requestData = {
    blocked: isBlocked
  };

  fetch(url, {
    method: 'PATCH', // or 'PUT'
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  })
    .then(function(response) {
      if (response.ok) {
        // Update the UI to reflect the changes
        if (isBlocked) {
          elementToUpdate.textContent = 'Unblock';
        } else {
          elementToUpdate.textContent = 'Block';
        }
        alert('User status updated successfully!');
      } else {
        alert('Failed to update user status. Please try again.');
      }
    })
    .catch(function(error) {
      console.log('Error:', error);
      alert('An error occurred. Please try again later.');
    });
}

// Call the fetchSubscribers function to initially load the subscribers
fetchSubscribers();
