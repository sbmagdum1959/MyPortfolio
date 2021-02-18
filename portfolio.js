const hamburger=document.querySelector('.header .navbar .nav-list .hamburger');
const mobile_menu=document.querySelector('.header .navbar .nav-list ul');
const header=document.querySelector('.header .container');
let mobile_activate=document.getElementsByClassName('nav_items');
let hero=document.getElementById('hero');


let a_hero=document.getElementById('a_hero');
let a_services=document.getElementById('a_services');
let a_about=document.getElementById('a_about');
let a_contact=document.getElementById('a_contact');


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
   
   mobile_menu.classList.toggle('active');
//    for (var i = 0 ; i < mobile_activate.length; i++) {
//     console.log("hello");
//    mobile_activate[i].addEventListener('click',(e)=>{
//    console.log("hello");
//    })
// }
})

a_hero.addEventListener('click',()=>{
 hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');

})

a_services.addEventListener('click',()=>{
 hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
})

a_about.addEventListener('click',()=>{
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
})

a_contact.addEventListener('click',()=>{
  
hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
})