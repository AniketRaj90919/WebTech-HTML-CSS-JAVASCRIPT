
let email = localStorage.getItem("userEmail");
let firstName = localStorage.getItem("firstName");
let lastName = localStorage.getItem("lastName");

if (email) {

    let fullName = firstName + " " + lastName;

    document.getElementById("username").innerHTML = fullName;
    document.getElementById("useremail").innerHTML = email;

    let initials =
        firstName.charAt(0).toUpperCase() +
        lastName.charAt(0).toUpperCase();

    document.getElementById("logo").innerHTML = initials;

    document.getElementById("fullName").value = fullName;
    document.getElementById("profileEmail").value = email;
}


// Navigation

document.getElementsByClassName("security")[0].addEventListener("click", function () {
    location.href = "Security.html";
});

document.getElementsByClassName("notification")[0].addEventListener("click", function () {
    location.href = "Notification.html";
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


// Profile Form

const profileForm = document.getElementById("profileForm");

const phone = document.getElementById("phone");
const pin = document.getElementById("pin");
const city = document.getElementById("city");
const country = document.getElementById("country");

const profileError = document.getElementById("profileError");
profileError.innerHTML = "";
profileError.style.display = "none";


profileForm.addEventListener("submit", function (e) {

    e.preventDefault();

    // Error message clear
    profileError.innerHTML = "";
    profileError.style.color = "red";


    // Phone validation
    if (!/^\d{10}$/.test(phone.value)) {

        profileError.innerHTML = "phone number should be exactly 10 digits";
        profileError.style.display = "inline";
        return;
    }


    // PIN validation
    if (!/^\d{6}$/.test(pin.value)) {

        profileError.innerHTML = "Incorrect PIN code";
        profileError.style.display = "inline";
        return;
    }


    // City validation
    if (!/^[A-Za-z ]+$/.test(city.value)) {

        profileError.innerHTML = "Incorrect city";
        profileError.style.display = "inline";
        return;
    }


    // Country validation
    if (!/^[A-Za-z ]+$/.test(country.value)) {

        profileError.innerHTML = "Incorrect country";
        profileError.style.display = "inline";
        return;
    }


    // Agar sab correct hai to localStorage me save hoga

    localStorage.setItem(
        "fullName",
        document.getElementById("fullName").value
    );

    localStorage.setItem(
        "dob",
        document.getElementById("dob").value
    );

    localStorage.setItem(
        "profileEmail",
        document.getElementById("profileEmail").value
    );

    localStorage.setItem(
        "phone",
        phone.value
    );

    localStorage.setItem(
        "streetAddress",
        document.getElementById("streetAddress").value
    );

    localStorage.setItem(
        "pinCode",
        pin.value
    );

    localStorage.setItem(
        "city",
        city.value
    );

    localStorage.setItem(
        "country",
        country.value
    );

    localStorage.setItem(
        "github",
        document.getElementById("github").value
    );


    // Green message

    profileError.innerHTML = "Profile Updated Successfully";
    profileError.style.color = " rgb(7, 137, 7)";
    profileError.style.display = "inline";
});
    const cancelBtn= document.querySelector(".cancel");
    cancelBtn.addEventListener("click", function () {
        profileError.innerHTML = "cancel successfully";
        profileError.style.color = "rgb(7, 137, 7)";
        profileError.style.display = "block";
    });
