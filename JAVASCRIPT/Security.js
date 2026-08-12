

let email = localStorage.getItem("userEmail");
let password = localStorage.getItem("password");

let firstName = localStorage.getItem("firstName");
let lastName = localStorage.getItem("lastName");

if (email) {

    document.getElementById("useremail").innerHTML = email;

    let fullName = firstName + " " + lastName;
    document.getElementById("username").innerHTML = fullName;

    let initials =
        firstName.charAt(0).toUpperCase() +
        lastName.charAt(0).toUpperCase();

    document.getElementById("logo").innerHTML = initials;
}
document.getElementsByClassName("notification")[0].addEventListener("click", function () {
    location.href = "Notification.html";
});
document.getElementsByClassName("profile1")[0].addEventListener("click", function () {
    location.href = "Profile.html";
});
document.getElementsByClassName("help")[0].addEventListener("click", function () {
    location.href = "Help&Support.html";
});
document.getElementsByClassName("overview")[0].addEventListener("click", function () {
    location.href = "Overview.html";
});
document.getElementsByClassName("abc")[0].addEventListener("click", function () {
    location.href = "Landing.html";
});
const currentPassword = document.getElementById("currentPassword");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");

const clearBtn = document.getElementById("clearBtn");
const form = document.getElementById("securityForm");
const message = document.getElementById("passwordMessage");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let savedPassword = localStorage.getItem("password");

    if (currentPassword.value !== savedPassword) {
        message.innerHTML = "Current password is incorrect.";
        message.style.color = "red";
        message.style.display = "block";
        return;
    }

    if (newPassword.value.length < 6) {
        message.innerHTML = "New password must be at least 6 characters.";
        message.style.color = "red";
        message.style.display = "block";
        return;
    }

    if (newPassword.value !== confirmPassword.value) {
        message.innerHTML = "New password and confirm password do not match.";
        message.style.color = "red";
        message.style.display = "block";
        return;
    }

    localStorage.setItem("password", newPassword.value);

    message.innerHTML = "Password updated successfully!";
    message.style.color = "green";
    message.style.display = "block";

    currentPassword.value = "";
    newPassword.value = "";
    confirmPassword.value = "";
});

clearBtn.addEventListener("click", function () {
    message.innerHTML = "clear";
    message.style.color = "green";
    message.style.display = "block";
});