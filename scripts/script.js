const btn=document.querySelector(".mobile-nav-toggle")
const nav=document.querySelector(".nav-baar")

btn.addEventListener("click",function(){
    nav.classList.toggle("show");

});

const boxes=document.querySelectorAll(".box")
window.addEventListener(("scroll"),checkBoxes)


function checkBoxes(){
 const triggerBottom=window.innerHeight /5*4

 boxes.forEach(box => {
     const boxTop=box.getBoundingClientRect().top

     if (boxTop<triggerBottom) {
         box.classList.add("shows")
         
     } else {
         box.classList.remove("shows")
         
     }
     
    });

}