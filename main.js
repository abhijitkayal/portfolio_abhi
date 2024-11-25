var typed=new Typed(".text",{
    strings:["frontend and","web developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
let menuicon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");
let logo=document.getElementById("logo");
let blink=document.getElementById("blink");
let email=document.getElementById("email");
email.addEventListener("click",()=>{
    window.open("https://mail.google.com/mail/u/0/#sent?compose=DmwnWrRrlZZHwvgvszmRRmCzngtLLSfFFGlBtwCThfpNbvmzqLKgZrSRjKhqzswBfTQnNsxxnKKG");
    
})
logo.addEventListener("click",()=>{
    window.open("https://ai-kautilya.vercel.app/")
    console.log("hi");
})
menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}