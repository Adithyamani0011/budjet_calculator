function login() {
    // Get input values
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pswd").value;

    // Check if any field is empty
    if (!username || !password) {
        alert("Please fill in all fields");
        return;
    }

    // Check if the account exists in local storage
    if (!localStorage.getItem(username)) {
        alert("Account not found. Please sign up first.");
        return;
    }

    // Get stored user data
    var storedUser = JSON.parse(localStorage.getItem(username));

    // Check if the entered password matches the stored password
    if (password === storedUser.password) {
        // If passwords match, login successful
        alert("Logged in successfully!");
        // Redirect to home page or any desired location
        window.location.href = "./index.html?username=" + username;
    } else {
        // If passwords don't match, show error message
        alert("Incorrect password. Please try again.");
    }
}
