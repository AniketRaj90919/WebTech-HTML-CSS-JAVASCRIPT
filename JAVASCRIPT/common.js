
let email = localStorage.getItem("userEmail");
let firstName = localStorage.getItem("firstName");
let lastName = localStorage.getItem("lastName");

if (email) {

    let fullName = firstName + " " + lastName;

    document.getElementById("useremail").innerHTML = email;
    document.getElementById("username").innerHTML = fullName;

    let initials =
        firstName.charAt(0).toUpperCase() +
        lastName.charAt(0).toUpperCase();

    document.getElementById("logo").innerHTML = initials;
}

const profile = document.getElementsByClassName("profile")[0];
const security = document.getElementsByClassName("security")[0];
const notification = document.getElementsByClassName("notification")[0];
const help = document.getElementsByClassName("help")[0];
const abc = document.getElementsByClassName("abc")[0];
const overview = document.getElementsByClassName("overview")[0];

if (profile) {
    profile.addEventListener("click", function () {
        location.href = "Profile.html";
    });
}

if (security) {
    security.addEventListener("click", function () {
        location.href = "Security.html";
    });
}

if (notification) {
    notification.addEventListener("click", function () {
        location.href = "Notification.html";
    });
}

if (help) {
    help.addEventListener("click", function () {
        location.href = "Help&Support.html";
    });
}

if (abc) {
    abc.addEventListener("click", function () {
        location.href = "Landing.html";
    });
}

if (overview) {
    overview.addEventListener("click", function () {
        location.href = "Overview.html";
    });
}