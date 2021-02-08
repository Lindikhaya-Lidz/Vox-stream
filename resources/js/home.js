const burger = document.querySelector('.burger');
const CloseMenu = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu-container');
const carouselText = document.querySelector('.carousel-text');

burger.addEventListener('click',()=> {
    burger.style.display = 'none';
    //carouselText.style.display = "none";
    mobileMenu.style.display = "inline-block";

});


CloseMenu.addEventListener('click',()=>{
    mobileMenu.style.display = 'none';
    burger.style.display = 'block';
})