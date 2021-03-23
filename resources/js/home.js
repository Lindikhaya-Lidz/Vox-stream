const burger = document.querySelector('.burger');
const CloseMenu = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');
const carouselText = document.querySelector('.carousel-text');
const dotMenuBar = document.querySelector('.dot-bar');
const menuSearch = document.querySelector('.menu-search');
const filteredSearch = document.querySelector('.filtered-search-form');
const carousel =  document.querySelector('.carousel');
const filterSearchForm = document.querySelector('.filtered-search-form');

dotMenuBar.addEventListener('click',()=> {
    let contactsAndSignin = document.querySelector('.contacts-signin');
    if(contactsAndSignin.style.display ==='none'){
        contactsAndSignin.style.display = 'inline-block';
        
    }else{
        contactsAndSignin.style.display = 'none';
        //contactsAndSignin.style.animationName = 'slide-out';
       
    }
})

burger.addEventListener('click',()=> {
    //burger.style.display = 'none';
    //carouselText.style.display = "none";
    mobileMenu.style.display = "inline-block";

});


CloseMenu.addEventListener('click',()=>{
    mobileMenu.style.display = 'none';
    burger.style.display = 'block';
    filteredSearch.style.display = 'none';

});

menuSearch.addEventListener('click', ()=>{
    if(filteredSearch.style.display ==='none'){
        filteredSearch.style.display = 'inline-block';
    }else{
        filteredSearch.style.display = 'none';
    }
})

function carouselNav(){
   const carouselNav = document.querySelector('.carousel-nav');
   const circle1 = document.querySelector('.circle1');
   const circle2 = document.querySelector('.circle2');
   const circle3 = document.querySelector('.circle3');
   const carBrand = document.querySelector('.Car-brand');
   const modelYear = document.querySelector('.model-year');
   const price = document.querySelector('.price');
   
   circle1.addEventListener('click', ()=> {
    carousel.style.animationName = 'appear'; 
    carousel.style.backgroundImage = 'url(resources/media/dodge-charger3.gif)';
    modelYear.textContent = '2017';
    carBrand.textContent = 'Demon Dodge';
    price.textContent = '$35,000'; 
 });

   circle2.addEventListener('click',()=>{
       carousel.style.backgroundImage = 'url(resources/media/bmw3.gif)';
       carBrand.textContent = 'BMW M5 GRAND';
       modelYear.textContent = '2017';
       price.textContent = '$64,000'; 
   });
   
   circle3.addEventListener('click',()=>{
       carousel.style.backgroundImage = 'url(resources/media/bmw325_4.gif)';
       carBrand.textContent = 'BMW ZAR 7 325is'
       modelYear.textContent = '1986';
       price.textContent = '$55,000';      
   });
}
carouselNav();

function navButtons(){
    let index = 0;
    const leftButton = document.querySelector('.button-left');
    const rightButton = document.querySelector('.button-right');
    let urlList = ['url(resources/media/dodge-charger3.gif)', 'url(resources/media/bmw3.gif)' , 'url(resources/media/bmw325_4.gif)'];

    leftButton.onclick = ()=>{
        if(index <= -0){

        }else{
            index--;
          carousel.style.backgroundImage = urlList[index]
            
        }
    
    } 
    rightButton.onclick = ()=>{
        if(index >= urlList.length-1){

        }else{
            index++;
            carousel.style.backgroundImage = urlList[index];
        }
    }
}
navButtons();
