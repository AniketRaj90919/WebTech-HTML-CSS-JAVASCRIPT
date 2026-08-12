let remember = document.getElementById("remember");
// let signup = document.getElementById("signup");
let checkError = document.getElementById("checkError");

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

let firstNameError = document.getElementById("firstNameError");
let lastNameError = document.getElementById("lastNameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmPasswordError = document.getElementById("confirmPasswordError");




// Create Account
// signup.addEventListener("click", function () {
   let form=
   document.getElementById("signupForm");

// First Name ka error sahi karne par hat jayega
firstName.addEventListener("input", function () {
    if (/^[A-Za-z]+$/.test(firstName.value)) {
        firstNameError.innerHTML = "";
    }
});

// Last Name ka error sahi karne par hat jayega
lastName.addEventListener("input", function () {
    if (/^[A-Za-z]+$/.test(lastName.value)) {
        lastNameError.innerHTML = "";
    }
});

// Email ka error sahi karne par hat jayega
email.addEventListener("input", function () {
    let emailPattern = /^[A-Za-z0-9]{4,}@gmail\.com$/;

    if (emailPattern.test(email.value)) {
        emailError.innerHTML = "";
    }
    password.addEventListener("input", function () {

    if (password.value.length >= 6) {
        passwordError.innerHTML = "";
        document.getElementById("passwordHint").style.display = "block";
    }

});
});

// form.addEventListener("submit", function(e) {

//     e.preventDefault();

 form.addEventListener("submit", function(e) {
    e.preventDefault();

    // First Name
    if (!/^[A-Za-z]+$/.test(firstName.value)) {
        firstNameError.innerHTML = "Only alphabets are allowed";
        return;
    }
    // Last Name
    if (!/^[A-Za-z]+$/.test(lastName.value)) {
        lastNameError.innerHTML = "Only alphabets are allowed";
        return;
    }


    // Password blank hai
    if (password.value === "") {
        passwordError.innerHTML = "Please fill out this field";
        return;
    }

    // Password 8 se kam hai
    if (password.value.length < 6) {
        e.preventDefault();
        document.getElementById("passwordHint").style.display = "none";
        passwordError.innerHTML = "Must be 6 characters";
        return;
    }

    // Email check
    let emailPattern = /^[A-Za-z0-9]{4,}@gmail\.com$/;

    if (!emailPattern.test(email.value)) {
        e.preventDefault();
        emailError.innerHTML = "Email should contain more than 4 characters ";
        return;
    }

    // Confirm password
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        confirmPasswordError.innerHTML = "Incorrect password";
        return;
    }

    // Checkbox
    if (!remember.checked) {
        e.preventDefault();
        checkError.innerHTML = "Please check 'I agree to the Terms'";
        return;
    }

    // Local Storage
    localStorage.setItem("firstName", firstName.value);
    localStorage.setItem("lastName", lastName.value);
    localStorage.setItem("userEmail", email.value);
    localStorage.setItem("password", password.value);

    alert("Signin Successful");

    window.location.href = "Signin.html";
});

document.getElementById("signin1").addEventListener("click", function () {
    window.location.href = "Signin.html";
});
