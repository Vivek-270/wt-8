// XSS prevention - Encode user input before rendering
function encodeHTML(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// SQL Injection prevention - Escape special characters in user input
function escapeSQL(s) {
  return s.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

// Prevent XSS and SQL Injection in form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Encode user input to prevent XSS
  firstName = encodeHTML(firstName);
  lastName = encodeHTML(lastName);
  email = encodeHTML(email);
  password = escapeSQL(password); // Escape special characters to prevent SQL Injection
  confirmPassword = escapeSQL(confirmPassword);

  // Update form fields with sanitized values
  document.getElementById('firstName').value = firstName;
  document.getElementById('lastName').value = lastName;
  document.getElementById('email').value = email;
  document.getElementById('password').value = password;
  document.getElementById('confirmPassword').value = confirmPassword;
});
