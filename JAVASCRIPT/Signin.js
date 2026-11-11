const loginBtn = document.getElementById("loginbtn");


loginBtn.addEventListener("click", function(e){

    e.preventDefault();


    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const rememberMe = document.getElementById("rememberMe").checked;


    const user = JSON.parse(localStorage.getItem("user"));


   if(user && user.email === email && user.password === password){

    // sirf jab checkbox checked ho
    if(rememberMe){

        localStorage.setItem(
            "rememberUser",
            JSON.stringify({
                email: email,
                password: password,
                expiry: new Date().getTime() + (30 * 24 * 60 * 60 * 1000)
            })
        );

    }

    alert("Login Successfully");
    window.location.href = "Overview.html";

}
else{
    alert("Email or password is incorrect.");
}

});