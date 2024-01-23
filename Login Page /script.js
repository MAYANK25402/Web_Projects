function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
  
    // Example: Check if username and password match a predefined value
    if (username === '123' && password === '123') {
      // Successful login
      errorMessage.innerHTML = '';
      alert('Login successful!');
    } else {
      // Display error message
      errorMessage.innerHTML = 'Invalid username or password';
    }
  }
