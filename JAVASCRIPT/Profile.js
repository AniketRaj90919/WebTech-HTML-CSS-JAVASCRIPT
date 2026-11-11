const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");

if(user){

    const fullName = user.firstName +" "+ user.lastName;

    fullNameInput.value = fullName;
    emailInput.value = user.email;

    document.getElementById("username").textContent = fullName;
    document.getElementById("useremail").textContent = user.email;
}

document.querySelector("form").addEventListener("submit", (e) => {

      e.preventDefault();

    let updatedName = fullNameInput.value.trim();
    let updatedEmail = emailInput.value.trim();


    if(updatedName === "" || updatedEmail === ""){
        alert("Name and Email are required");
        return;
    }


    let nameParts = updatedName.split(" ");


    const updatedUser = {
        firstName: nameParts[0],
        lastName: nameParts.slice(1).join(" "),
        email: updatedEmail,
        password: user.password
    };


    localStorage.setItem("user", JSON.stringify(updatedUser));


    const successMessage = document.getElementById("successMessage");

     successMessage.innerHTML = "Successfully Changed!";
     successMessage.style.display = "block";

     setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);


    

});



document.querySelector(".cencel-btn").addEventListener("click", () => {

    const allInputs = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");

    allInputs.forEach(input => {
        input.value = "";
    });

    textarea.value = "";

});
   