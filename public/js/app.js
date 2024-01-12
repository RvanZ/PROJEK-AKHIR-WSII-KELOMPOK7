// app.js
$(document).ready(function () {
    // Handle login form submission
    $('#loginForm').submit(function (event) {
        event.preventDefault();
        const formData = $(this).serialize();
        // Send formData to the login API endpoint in your Node.js backend
        // Example using jQuery AJAX:
        // $.post('/api/login', formData, function (response) {
        //   console.log(response);
        // });
    });

    // Handle register form submission
    $('#registerForm').submit(function (event) {
        event.preventDefault();
        const formData = $(this).serialize();
        // Send formData to the register API endpoint in your Node.js backend
        // Example using jQuery AJAX:
        // $.post('/api/register', formData, function (response) {
        //   console.log(response);
        // });
    });
});
