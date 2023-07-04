    
    // let position2 = 0;
    // const slidesClientsToShow = 3;
    // const slidesClientsToScroll = 1;
    // const containerSlidesClients = document.querySelector('.clients--slider-content');
    // const trackSlidesClients = document.querySelector('.clients--slider-items');
    // const itemsSlidesClients = document.querySelectorAll('.cleints-sleder_item');
    // const itemsCountSlidesClients = itemsSlidesClients.length;
    // const nextButtonSlidesClients = document.querySelector('.clients--slider__next');
    // const prevButtonSlidesClients = document.querySelector('.clients--slider__prev');
    // const widthFocusItemSlidesClients = 500;
    // //ширина каждого элемента
    // const itemWidthSlidesClients = containerSlidesClients.clientWidth / slidesClientsToShow;
    // // 
    // const movePositionSlidesClients = slidesClientsToScroll * itemWidthSlidesClients;


    // itemsSlidesClients.forEach((item2)=>{
    //     item2.style.minWidth = `${itemWidthSlidesClients}px`;
    // });


    // checkBtns2();
    
    // nextButtonSlidesClients .addEventListener('click', () => {
    //     const itemsLeft = itemsCountSlidesClients -(Math.abs(position2) + slidesClientsToShow * itemWidthSlidesClients) / itemWidthSlidesClients;
    //     position2 -= itemsLeft >= slidesClientsToScroll ? movePositionSlidesClients : itemsLeft * itemWidthSlidesClients;

    //     setPosition2();
    //     checkBtns2();
        
    // });
    // prevButtonSlidesClients.addEventListener('click', () => {
    //     const itemsLeft = Math.abs(position2) / itemWidthSlidesClients;
    //     position2 += itemsLeft >= slidesClientsToScroll ? movePositionSlidesClients : itemsLeft * itemWidthSlidesClients;
        

    //     setPosition2();
    //     checkBtns2();
        
    // });
    
    
    // const setPosition2 = () =>{
    //     // смещение трека
    //     trackSlidesClients.style.transform = `translateX(${position2}px)`;
    // };
    // function checkBtns2(){
    //     prevButtonSlidesClients.disabled = position2 === 0;
    //     nextButtonSlidesClients.disabled = position2 <= -(itemWidthSlidesClients - slidesClientsToShow) * itemWidthSlidesClients;

    //     if(prevButtonSlidesClients.disabled === true){
    //         prevButtonSlidesClients.classList.add('nonactive');
    //         prevButtonSlidesClients.classList.remove('active');
    //     }
    //     if(nextButtonSlidesClients.disabled === true){
    //         nextButtonSlidesClients.classList.add('nonactive');
    //         nextButtonSlidesClients.classList.remove('active');
    //     }
    //     if(prevButtonSlidesClients.disabled === false){
    //         prevButtonSlidesClients.classList.add('active');
    //         prevButtonSlidesClients.classList.remove('nonactive');
    //     }
    //     if(nextButtonSlidesClients.disabled === false){
    //         nextButtonSlidesClients.classList.add('active');
    //         nextButtonSlidesClients.classList.remove('nonactive');
    //     }
    //     setTimeout(checkBtns2, 1000);
    // }