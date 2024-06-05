const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send username and password to the server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/register');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Handle successful registration
            alert('User registered successfully!');
            // Clear the form fields
            registrationForm.reset();
        } else {
            // Handle registration error
            alert('Error registering user: ' + xhr.responseText);
        }
    };
    xhr.send(JSON.stringify({ username, password }));
});
