

// // Signup page
// document.getElementsByClassName("signup")[0].addEventListener("click", function () {
//     location.href = "Signup.html";
// });
// let savedEmail = localStorage.getItem("userEmail");
// let savedPassword = localStorage.getItem("password");

// let email = document.getElementById("email");
// let error = document.getElementById("error");

// let password = document.getElementById("password");
// let passError = document.getElementById("passerror");

// let remember = document.getElementById("remember");
// let form = document.querySelector("form");

// // Sign In
// form.addEventListener("submit", function (e) {

//     e.preventDefault();

//     // Check email
//     if (email.value !== savedEmail) {
//         error.innerHTML = "Incorrect email";
//         return;
//     }

//     // Check password
//     if (password.value !== savedPassword) {
//         passError.innerHTML = "Incorrect password";
//         return;
//     }

//     // Both correct
//     alert("Sign In Successful");

//     window.location.href = "Overview.html";
// });

// // Signup page
// document.getElementsByClassName("signup")[0].addEventListener("click", function () {
//     location.href = "Signup.html";
// });let savedEmail = localStorage.getItem("userEmail");
let savedEmail = localStorage.getItem("userEmail");
let savedPassword = localStorage.getItem("password");

let email = document.getElementById("email");
let error = document.getElementById("error");

let password = document.getElementById("password");
let passError = document.getElementById("passerror");

let remember = document.getElementById("remember");
let form = document.querySelector("form");

// Error aane ke baad email change karte hi error hatao
email.addEventListener("input", function () {
    error.innerHTML = "";
});

// Error aane ke baad password change karte hi error hatao
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
