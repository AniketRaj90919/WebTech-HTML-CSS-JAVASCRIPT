const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const button = document.querySelector(".submit");
   
   let submitted = false;



inputs[0].addEventListener("input", function () {

    if (/^[A-Za-z]+$/.test(this.value.trim())) {
        document.getElementById("firstNameError").innerHTML = "";
    }

});


inputs[1].addEventListener("input", function () {

    if (/^[A-Za-z]+$/.test(this.value.trim())) {
        document.getElementById("lastNameError").innerHTML = "";
    }

});


inputs[2].addEventListener("input", function () {

    let emailPattern = /^[A-Za-z0-9]{4,}@[A-Za-z]+\.[A-Za-z]{2,}$/;

    if (emailPattern.test(this.value.trim())) {
        document.getElementById("emailError").innerHTML = "";
    }

});

inputs[3].addEventListener("input", function () {

    let passwordError = document.getElementById("passwordError");

    if (this.value.length >= 6) {

        passwordError.innerHTML =
        "Use at least 6 characters, with letter and number.";

        passwordError.style.color = "#222";

    }

});


inputs[4].addEventListener("input", function () {

    if (this.value === inputs[3].value) {
        document.getElementById("confirmPasswordError").innerHTML = "";
    }

});


button.addEventListener("click", function(e){

    e.preventDefault();

    submitted = true;

    // const inputs = document.querySelectorAll("input");

    // const form = document.querySelector("form");
    const firstName = inputs[0].value.trim();
    const lastName = inputs[1].value.trim();
    const email = inputs[2].value.trim();
    const password = inputs[3].value;
    const confirmPassword = inputs[4].value;
    const terms = document.getElementById("terms").checked;




     let isValid = true;

    // Clear previous errors
    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("lastNameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    // document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";
    // document.getElementById("termsError").innerHTML = "";


    
    if( firstName!=="" && !/^[A-Za-z]+$/.test(firstName)){
        document.getElementById("firstNameError")
        .innerHTML="only alphabets are allowed.";
           isValid = false;
    }


    
    if(lastName!=="" && !/^[A-Za-z]+$/.test(lastName)){
        document.getElementById("lastNameError")
        .innerHTML="only alphabets are allowed";
              isValid = false;
    }


    
    let emailPattern = /^[A-Za-z0-9]{4,}@[A-Za-z]+\.[A-Za-z]{2,}$/;

    if( email !== "" && !emailPattern.test(email)){
        document.getElementById("emailError")
        .innerHTML=" Email must be more then three digits.";
               isValid = false;
    }



if(password !== "" && password.length < 6){

    document.getElementById("passwordError").innerHTML =
    "Password must be at least 6 characters.";

    document.getElementById("passwordError").style.color = "red";

    isValid = false;

}
else {

    document.getElementById("passwordError").innerHTML =
    "Use at least 6 characters, with letter and number.";

    document.getElementById("passwordError").style.color = "#222";

}
    
    
    if( confirmPassword !==""&&password !== confirmPassword){
        document.getElementById("confirmPasswordError")
        .innerHTML="password does not match.";
               isValid = false;
    }



   
    if(!form.checkValidity()){
        form.reportValidity();
        return;
    }

     if(isValid){
      
        const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(userData));


    alert("Account Created Successfully");

       window.location.href = "Signin.html";
    }

 
});
