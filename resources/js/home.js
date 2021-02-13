const burger = document.querySelector('.burger');
const CloseMenu = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');
const carouselText = document.querySelector('.carousel-text');
const dotMenuBar = document.querySelector('.dot-bar');

dotMenuBar.addEventListener('click',()=> {
    let contactsAndSignin = document.querySelector('.contacts-signin');
    if(contactsAndSignin.style.display ==='none'){
        contactsAndSignin.style.display = 'inline-block';
    }else{
        contactsAndSignin.style.display = 'none';
    }
    console.log('I have been click');
})

burger.addEventListener('click',()=> {
    //burger.style.display = 'none';
    //carouselText.style.display = "none";
    mobileMenu.style.display = "inline-block";

});


CloseMenu.addEventListener('click',()=>{
    mobileMenu.style.display = 'none';
    burger.style.display = 'block';
})