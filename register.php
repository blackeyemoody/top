<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Form</title>
    <link rel="stylesheet" href="styles.css"> </head>
<body>

<div class="container">
    <h2>Register</h2>
    <form id="registrationForm">
        <label for="firstName">Username:</label>
        <input type="text" id="firstName" name="firstName" required>
        <div id="firstNameError" class="error"></div>

        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required>
        <div id="lastNameError" class="error"></div>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <div id="passwordError" class="error"></div>

        <button type="submit">Register</button>
    </form>
</div>


<script src="script.js"></script>

</body>
</html>