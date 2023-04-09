window.addEventListener('DOMContentLoaded', function(){
    'use strict'
    
    let wrapBtn = document.querySelector('.tabs-button');
    let btn = document.querySelectorAll('.tabs-button__item');
    let tabs = document.querySelectorAll('.tabs-content');
    
    
    
    function hideTabContent(hide){
        for(let i = hide; i < tabs.length; i++){
            tabs[i].classList.remove('show');
            tabs[i].classList.add('hide');
        }}
    
        hideTabContent(1);
    
    
    function showTabContent(show){
        if(tabs[show].classList.contains('hide')){
            tabs[show].classList.remove('hide');
            tabs[show].classList.add('show');
        }}
    
    
    wrapBtn.addEventListener('click', function(event){
            let target = event.target;
            if(target && target.classList.contains('tabs-button__item')){
                for(let i = 0; i < btn.length; i++){
                    if(target == btn[i]){
                        hideTabContent(0);
                        showTabContent(i);
                        break; 
                    }
                }
            }
        })
        console.log(target)
    });