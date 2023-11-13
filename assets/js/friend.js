var initialUsername = ''; // Variable to store the initial username
toggleSubmitButton()
function toggleSubmitButton() {
    var username = document.getElementById('username').value;
    var submitButton = document.getElementById('submitButton');

    // Check if username has changed
    if (username !== initialUsername) {
        submitButton.style.display = 'none'; // Hide the Submit button
    } else {
        // Show the Submit button if username is not empty
        submitButton.style.display = username.trim() !== '' ? 'inline-block' : 'none';
    }
}

function checkUsername() {
    initialUsername = document.getElementById('username').value; // Save the initial username
    toggleSubmitButton();
}