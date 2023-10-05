function validateForm() {
    var username = document.getElementsByName("username")[0].value.trim();
    var password = document.getElementsByName("password")[0].value.trim();
    var errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill in both username and password.";
        return false;
    } else {
        errorMessage.textContent = ""; // Clear the error message if there are no errors.
    }

    return true;
}