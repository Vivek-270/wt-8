function validateForm() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var isValid = true;

  // Check for empty fields
  if (firstName.trim() === '') {
    document.getElementById('firstNameError').textContent = 'First name is required';
    isValid = false;
  } else {
    document.getElementById('firstNameError').textContent = '';
  }

  if (lastName.trim() === '') {
    document.getElementById('lastNameError').textContent = 'Last name is required';
    isValid = false;
  } else {
    document.getElementById('lastNameError').textContent = '';
  }

  if (email.trim() === '') {
    document.getElementById('emailError').textContent = 'Email is required';
    isValid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email format';
    isValid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    document.getElementById('passwordError').textContent = 'Passwords do not match';
    document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
    isValid = false;
  } else {
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
  }

  return isValid;
}
