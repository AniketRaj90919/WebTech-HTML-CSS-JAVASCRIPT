document.getElementsByClassName("signup")[0].addEventListener("click", function () {
    location.href = "Signup.html";
});
document.getElementsByClassName("signup1")[0].addEventListener("click", function () {
    location.href = "Signup.html";
});

document.getElementsByClassName("btn")[0].addEventListener("click", function () {
 location.href = "Signup.html";
});

document.getElementById("about1").addEventListener("click", function(){

    document.getElementsByClassName("about")[0].scrollIntoView({behavior: "smooth"});
});
document.getElementById("about2").addEventListener("click", function(){

    document.getElementsByClassName("about")[0].scrollIntoView({behavior: "smooth"});
});

document.getElementById("services1").addEventListener("click", function(){

    document.getElementsByClassName("features")[0].scrollIntoView({behavior: "smooth"});
});
document.getElementById("services2").addEventListener("click", function(){

    document.getElementsByClassName("features")[0].scrollIntoView({behavior: "smooth"});
});
document.getElementById("signin").addEventListener("click", function () {
 location.href = "signin.html";
});
document.getElementById("signin1").addEventListener("click", function () {
 location.href = "signin.html";
});
document.getElementsByClassName("btn2")[0].addEventListener("click", function () {
    location.href = "signin.html";
});
document.getElementById("theme").addEventListener("click", function (){
     alert("This function is not available");
    });
 document.getElementById("theme1").addEventListener("click", function (){
     alert("This function is not available");
    });

const title = document.querySelector(".slider-box h2");
const text = document.querySelector(".slider-box p");

const left = document.querySelector(".left-arrow");
const right = document.querySelector(".right-arrow");
const dots = document.querySelectorAll(".dots span");

const data = [
{
title: "Complete Auth Flow1",
text: "Beautiful dark/light mode with smooth <br> transitions, persisted across all pages <br>and sessions."
},
{
title: "Complete Auth Flow2",
text: "Beautiful dark/light mode with smooth <br> transitions, persisted across all pages<br> and sessions."
},
{
title:  "Complete Auth Flow3",
text: "Beautiful dark/light mode with smooth <br> transitions, persisted across all pages <br> and sessions."
}
];

let current = 0;

function updateSlider(){
    title.innerHTML = data[current].title;
    text.innerHTML = data[current].text;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[current].classList.add("active");
}

right.addEventListener("click", function(){
    current++;
    if(current > 2){
        current = 0;
    }
    updateSlider();
});

left.addEventListener("click", function(){
    current--;
    if(current < 0){
        current = 2;
    }
    updateSlider();
});
setInterval(function() {
    current++;

    if (current > 2) {
        current = 0;
    }

    updateSlider();
}, 3000);

