const overview = document.getElementById("overview");
 const profile = document.getElementById("profile");
 const security = document.getElementById("security");
 const notification = document.getElementById("notification");
 const help = document.getElementById("help");


 overview.addEventListener("click",function(){
    window.location.href = "Overview.html";
 });

 profile.addEventListener("click",function(){
    window.location.href="Profile.html";
 });

 security.addEventListener("click",function(){
   window.location.href = "Security.html";

 });

 notification.addEventListener("click",function(){
    window.location.href= "Notification.html";
 });
 help.addEventListener("click",function(){
    window.location.href = "Help&Support.html";
 });


 const currentpage = window.location.pathname.split("/").pop();


   if(currentpage=== "Overview.html"){
      overview.classList.add("active");
   }
    
   else if(currentpage === "Profile.html"){
      profile.classList.add("active");
   }

   else if(currentpage === "Security.html"){
      security.classList.add("active");
   }

   else if(currentpage === "Notification.html"){
       notification.classList.add("active");
   }
   else if(currentpage === "Help&Support.html"){
      help.classList.add("active");
   }

   document.querySelector(".Signout")
   .addEventListener("click",function(){
    window.location.href = "Landing.html";
   });

   const user = JSON.parse(localStorage.getItem("user"));

if (user) {
    const name = user.firstName + " " + user.lastName;
    const email = user.email;

    
    document.getElementById("username").textContent = name;

    
    document.getElementById("useremail").textContent = email;

    
    const words = name.trim().split(" ");
    let initials = "";

    if (words.length >= 2) {
        initials = words[0][0] + words[1][0];
    } else {
        initials = words[0][0];
    }

    document.getElementById("initials").textContent = initials.toUpperCase();

} else {
    alert("User not found");
    window.location.href = "Signup.html";
}

   