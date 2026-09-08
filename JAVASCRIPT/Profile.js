


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
    profileError.style.color = " rgb(12, 150, 12)";
    profileError.style.display = "block";
});
    const cancelBtn= document.querySelector(".cancel");
    cancelBtn.addEventListener("click", function () {
        profileError.innerHTML = "cancel successfully";
        profileError.style.color = "rgb(12, 150, 12)";
        profileError.style.display = "inline";
    });
