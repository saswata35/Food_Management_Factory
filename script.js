// Toggle between login and signup sections
function showSignup() {
    document.getElementById('login-section').classList.remove('active');
    document.getElementById('signup-section').classList.add('active');
}

function showLogin() {
    document.getElementById('signup-section').classList.remove('active');
    document.getElementById('login-section').classList.add('active');
}

// Signup handler
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const NAME = document.getElementById('signup-name').value;
    const EMAIL = document.getElementById('signup-email').value;
    const PH_NO = document.getElementById('signup-phone').value;
    const PWD = document.getElementById('signup-password').value;
    const ADDRESS = document.getElementById('signup-address').value;

    // Store user details in localStorage
    localStorage.setItem('NAME', NAME);
    localStorage.setItem('EMAIL', EMAIL);
    localStorage.setItem('PHONE_NO', PH_NO);
    localStorage.setItem('PASSWORD', PWD);
    localStorage.setItem('ADDRESS', ADDRESS);

    alert('Signup successful! Please log in.');
    showLogin();
});

// Login handler
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredUsername = document.getElementById('login-username').value;
    const enteredPassword = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('NAME');
    const storedPassword = localStorage.getItem('PASSWORD');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert('Login successful!');
        window.location.href = 'ConfirmationPage.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
