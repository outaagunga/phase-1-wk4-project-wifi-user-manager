window.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => populateCustomerDetails(data))
      .catch(error => console.error('Error:', error));
  });
  
  function populateCustomerDetails(data) {
    let customerList = document.getElementById('customerList');
    
    data.forEach(customer => {
      let listItem = document.createElement('li');
      listItem.className = 'customer-list-item';
      
      let idLabel = document.createElement('label');
      idLabel.textContent = 'ID:';
      listItem.appendChild(idLabel);
      
      let idSpan = document.createElement('span');
      idSpan.textContent = customer.id;
      listItem.appendChild(idSpan);
      
      let usernameLabel = document.createElement('label');
      usernameLabel.textContent = 'Username:';
      listItem.appendChild(usernameLabel);
      
      let usernameSpan = document.createElement('span');
      usernameSpan.textContent = customer.username;
      listItem.appendChild(usernameSpan);
      
      let emailLabel = document.createElement('label');
      emailLabel.textContent = 'Email:';
      listItem.appendChild(emailLabel);
      
      let emailSpan = document.createElement('span');
      emailSpan.textContent = customer.email;
      listItem.appendChild(emailSpan);
      
      let phoneLabel = document.createElement('label');
      phoneLabel.textContent = 'Phone:';
      listItem.appendChild(phoneLabel);
      
      let phoneSpan = document.createElement('span');
      phoneSpan.textContent = customer.phone;
      listItem.appendChild(phoneSpan);
      
      let packageLabel = document.createElement('label');
      packageLabel.textContent = 'Package:';
      listItem.appendChild(packageLabel);
      
      let packageSpan = document.createElement('span');
      packageSpan.textContent = customer.package;
      listItem.appendChild(packageSpan);
      
      customerList.appendChild(listItem);
    });
  }
  