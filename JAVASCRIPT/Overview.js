// let email = localStorage.getItem("userEmail");

// if (email) {

//     document.getElementById("useremail").innerHTML = email;

//     let name = email.split("@")[0];
//     document.getElementById("username").innerHTML = name;

//     document.getElementById("logo").innerHTML = name.charAt(0).toUpperCase();
//     let initials = name
//   .split(".")
//   .map(word => word.charAt(0).toUpperCase())
//   .join("");

// document.getElementById("logo").innerHTML = initials;
// }
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
document.getElementsByClassName("profile")[0].addEventListener("click", function () {
    location.href = "Profile.html";
});
document.getElementsByClassName("security")[0].addEventListener("click", function () {
    location.href = "Security.html";
});
document.getElementsByClassName("notification")[0].addEventListener("click", function () {
    location.href = "Notification.html";
});
document.getElementsByClassName("help")[0].addEventListener("click", function () {
    location.href = "Help&Support.html";
});
document.getElementsByClassName("abc")[0].addEventListener("click", function () {
    location.href = "Landing.html";
});