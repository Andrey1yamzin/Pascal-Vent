window.addEventListener('DOMContentLoaded', function(){
    'use strict'
    
    // let wrapBtn = document.querySelector('.tabs-button');
    // let btn = document.querySelectorAll('.tabs-button__item');
    // let tabs = document.querySelectorAll('.tabs-content');
    // let header = document.querySelector('.header');
    // let windowScroll;
    // let windowWidth;


    let burgerBtn = document.querySelector('.header-burger__button');
    let burgerMenu = document.querySelector('.header-menu__burger');

     
    // function hideTabContent(hide){
    //     for(let i = hide; i < tabs.length; i++){
    //         tabs[i].classList.remove('show');
    //         tabs[i].classList.add('hide');
    //         btn[i].classList.remove('active');
    //         if(btn[i].innerHTML == 'Система Вентиляции'){
    //             btn[i].classList.add('non-active__ventilation');
    //         }if(btn[i].innerHTML == 'Кондиционирование'){
    //             btn[i].classList.remove('active__condition');
    //             btn[i].classList.add('non-active');
    //         }
           
    //     }}
    
    //     hideTabContent(1);
    
    
    // function showTabContent(show){
    //     if(tabs[show].classList.contains('hide')){
    //         tabs[show].classList.remove('hide');
    //         tabs[show].classList.add('show');
    //         btn[show].classList.remove('non-active');
    //         if(btn[show].innerHTML == 'Система Вентиляции'){
    //             btn[show].classList.remove('non-active__ventilation');
    //             btn[show].classList.add('active');
    //         }if(btn[show].innerHTML == 'Кондиционирование'){
    //             btn[show].classList.remove('non-active');
    //             btn[show].classList.add('active__condition');
    //         }
    //     }}
    
    
    // wrapBtn.addEventListener('click', function(event){
    //         let target = event.target;
    //         if(target && target.classList.contains('tabs-button__item')){
    //             for(let i = 0; i < btn.length; i++){
    //                 if(target == btn[i]){
    //                     hideTabContent(0);
    //                     showTabContent(i);
    //                     break; 
    //                 }
    //             }
    //         }
    //     })


burgerBtn.addEventListener('click', function(){
    burgerMenu.classList.toggle('burger-activate');
})
        
// window.addEventListener('scroll', function(){
//     windowScroll = window.scrollY; 
//     windowWidth = window.innerWidth; 
//     if(windowScroll >= 2){
//         header.classList.add('header_fixed');
//         console.log(windowWidth);
//     }
//     if(windowScroll <= 10 || windowWidth <= 1036){
//         header.classList.remove('header_fixed');
        
//     }
//     if(windowWidth <= 1036){
//         header.style.position = 'relative';
//     }
// });
    });

//вынести в отельную функцию, для того что бы при загрузки ниже стр проверялось сколько px