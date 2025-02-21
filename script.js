
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (event) => {
        // Prevent default form submission
        event.preventDefault();

        // Clear previous errors
        clearErrors();

        // Perform validation
        let isValid = true;

        if (document.getElementById('firstName').value.trim() === "") {
            showError('firstNameError', 'First Name is required');
            isValid = false;
        }

        if (document.getElementById('lastName').value.trim() === "") {
            showError('lastNameError', 'Last Name is required');
            isValid = false;
        }

        if (document.getElementById('email').value.trim() === "") {
            showError('emailError', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(document.getElementById('email').value)) {
            showError('emailError', 'Invalid email format');
            isValid = false;
        }


        if (document.getElementById('password').value.trim() === "") {
            showError('passwordError', 'Password is required');
            isValid = false;
        }

        if (document.getElementById('dob').value.trim() === "") {
            showError('dobError', 'Date of Birth is required');
            isValid = false;
        }

        if (document.getElementById('gender').value === "") {
            showError('genderError', 'Gender is required');
            isValid = false;
        }

        if (isValid) {
            // Form is valid, you can submit it or perform other actions here.
            alert("Registration Successful (Simulated)"); // Replace with actual submission
            form.reset(); // Clear the form after successful submission
        }
    });

    function showError(errorId, message) {
        document.getElementById(errorId).textContent = message;
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }

        function isValidEmail(email) {
            // Basic email validation regex.  For more robust validation, consider a library.
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }