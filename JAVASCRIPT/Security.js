const securityForm = document.getElementById("securityForm");

const currentPassword = document.getElementById("currentPassword");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const passwordMessage = document.getElementById("passwordMessage");



securityForm.addEventListener("submit", function(e){

    e.preventDefault();



    if(currentPassword.value !== user.password){
        return;
    }


    
    if(newPassword.value !== confirmPassword.value){
        return;
    }


    
    user.password = newPassword.value;

    localStorage.setItem("user", JSON.stringify(user));


    passwordMessage.textContent="Password updated Successfully!";
    passwordMessage.style.display= "block";


    securityForm.reset();
    setTimeout(() => {
    passwordMessage.style.display = "none";
}, 3000);

});


document.querySelector(".clear-btn").addEventListener("click", function(){


    securityForm.reset();
    passwordMessage.style.display= "none";

});

   