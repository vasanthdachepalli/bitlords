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
    console.log(initialUsername);
    const url = "api2/?name=" + initialUsername;

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(count) {
            console.log(count);

            if (count.value === '1') {
                toggleSubmitButton();
            } else {
                alert("Username is invalid");
            }
        })
        .catch(function(error) {
            // Handle the error as needed
            console.error('Error:', error);
        });
}

