function register() {
    // Get input values
    var username = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pswd").value;

    // Check if any field is empty
    if (!username || !email || !password) {
        alert("Please fill in all fields");
        return;
    }

    // Check if the username already exists in localStorage
    if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose a different username.");
        return;
    }

    // Create user object
    var user = {
        username: username,
        email: email,
        password: password
    };

    // Store user data in localStorage
    localStorage.setItem(username, JSON.stringify(user));

    // Show success message
    alert("Registration successful!");

    // Redirect to login page
    window.location.href = "./login.html";
}
