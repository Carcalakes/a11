// Dummy user credentials (just for testing)
let users = [{username: "testuser", password: "password123", balance: 1000, portfolio: {}}];

// Login function
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));  // Store user data in localStorage
        window.location.href = "marketplace.html";  // Redirect to marketplace
    } else {
        alert("Invalid login credentials");
    }
});
