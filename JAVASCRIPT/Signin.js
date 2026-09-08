
let savedEmail = localStorage.getItem("userEmail");
let savedPassword = localStorage.getItem("password");

let email = document.getElementById("email");
let error = document.getElementById("error");

let password = document.getElementById("password");
let passError = document.getElementById("passerror");

let remember = document.getElementById("remember");
let form = document.querySelector("form");

email.addEventListener("input", function () {
    error.innerHTML = "";
});

password.addEventListener("input", function () {
    passError.innerHTML = "";
});

// Sign In
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Email check
    if (email.value !== savedEmail) {
        error.innerHTML = "Incorrect email";
        return;
    }

    // Password check
    if (password.value !== savedPassword) {
        passError.innerHTML = "Incorrect password";
        return;
    }

    // Correct
    error.innerHTML = "";
    passError.innerHTML = "";

    alert("Sign In Successful");

    window.location.href = "Overview.html";
});

// Signup
document.getElementsByClassName("signup")[0].addEventListener("click", function () {
    location.href = "Signup.html";
});
