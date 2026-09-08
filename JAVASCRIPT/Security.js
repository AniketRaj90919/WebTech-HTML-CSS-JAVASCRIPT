
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