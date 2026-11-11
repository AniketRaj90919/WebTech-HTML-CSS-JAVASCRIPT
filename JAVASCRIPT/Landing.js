document.querySelector(".nav-link")

.addEventListener("click",function(){

    document.querySelector(".about").scrollIntoView(
        {

        behavior:"smooth"
    });
});

 document.querySelector(".signup")

 .addEventListener("click",function(){
        window.location.href="Signup.html";
 });
 document.querySelector(".btn")
 .addEventListener("click",function(){
        window.location.href="Signup.html";
 });
 document.querySelector(".service")

 .addEventListener("click",function(){

    document.querySelector(".cards").scrollIntoView({

        behavior:"smooth"
    });
 });
 document.querySelector(".theme")
 .addEventListener("click",function(){
    alert("This function does not available!");
 });
 document.querySelector(".login")
 .addEventListener("click",function(){
    window.location.href="Signin.html";
 });
 
document.querySelector(".footer-about")
.addEventListener("click", function(){

    document.querySelector(".about").scrollIntoView({
        behavior:"smooth"
    });

});

document.querySelector(".footer-service")
.addEventListener("click", function(){

    document.querySelector(".cards").scrollIntoView({
        behavior:"smooth"
    });

});

document.querySelector(".footer-theme")
.addEventListener("click", function(){

    alert("This function is not available!");

});
document.querySelector(".footer-signup")
.addEventListener("click",function(){

    window.location.href="Signup.html";

});
document.querySelector(".footer-about")
.addEventListener("click",function(){
    document.querySelector(".about").scrollIntoView({
        behavior:"smooth"
    });
});

document.querySelector(".footer-login")
.addEventListener("click",function(){
    window.location.href="Signin.html";

});
document.querySelector(".btn2")
.addEventListener("click",function(){
    window.location.href="Signin.html";

});

const title = document.querySelector(".slide-title");
const text = document.querySelector(".slide-text");

const dots = document.querySelectorAll(".dots span");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");


const slides =[
    {
        title: "Complete Auth Flow 1",
        text: "Beautiful dark/light mode with smooth<br> transitions ,persisted across all pages<br> and sessions.",

    },

    {
        title:" Complete Auth Flow 2",
        text:" Beautiful dark/light mode with smooth <br>transitions ,persisted across all pages<br> and sessions.",
    },
    
    {
         title: "Complete Auth Flow 3",
        text: "Beautiful dark/light mode with smooth<br> transitions ,persisted across all pages<br> and sessions.",
    },

];

let current = 0;


// Slide Change Function
function showSlide(){

    title.innerHTML = slides[current].title;

    text.innerHTML = slides[current].text;


    dots.forEach(function(dot){
        dot.classList.remove("active");
    });


    dots[current].classList.add("active");
}





// Right Arrow
rightArrow.addEventListener("click", function(){

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide();

});


// Left Arrow
leftArrow.addEventListener("click", function(){

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide();

});


// Auto slide every 3 seconds
setInterval(function(){

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide();

},3000);

