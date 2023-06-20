    
    let position2 = 0;
    const slidesToShow2 = 1;
    const slidesToScroll2 = 1;
    const container2 = document.querySelector('.clients--slider-wrapper');
    const track2 = document.querySelector('.clients--slider-items');
    const items2 = document.querySelectorAll('.cleints-sleder_item');
    const itemsCount2 = items2.length;
    const nextButton2 = document.querySelector('.clients--slider__next');
    const prevButton2 = document.querySelector('.clients--slider__prev');
    const widthFocusItem2 = 500;
    //ширина каждого элемента
    const itemWidth2 = 250 / slidesToShow2;
    // 
    const movePosition2 = slidesToScroll2 * itemWidth2;
    let itemFocus2 = 0;
    

    items2.forEach((item2)=>{
        // задаём ширину каждому элементу в css
        item2.style.minWidth = `${itemWidth2}px`;
        
    });
    checkBtns2();
    addStyle2(getItemFocus2(itemFocus2));
    
    nextButton2.addEventListener('click', () => {
        const itemsLeft = itemsCount2 -(Math.abs(position2) + slidesToShow2 * itemWidth2) / itemWidth2;
        position2 -= itemsLeft >= slidesToScroll2 ? movePosition2 : itemsLeft * itemWidth2;
        itemFocus2 += 1;
        if(itemFocus2 > itemsCount2 - 1){
            itemFocus2 = itemsCount2 - 1;
        }else if(itemFocus2 < itemsCount2){
            addStyle(getItemFocus2(itemFocus2));
            removeStyle(getItemFocus2(itemFocus2 - 1))
        }
        setPosition2();
        checkBtns2();
        
    });
    prevButton2.addEventListener('click', () => {
        const itemsLeft = Math.abs(position2) / itemWidth2;
        position2 += itemsLeft >= slidesToScroll2 ? movePosition2 : itemsLeft * itemWidth2;
        itemFocus2 -= 1;
        if(itemFocus2 < 0){
            itemFocus2 = 0;
        }else if(itemFocus2 == itemsCount2 - 1 ||  itemFocus2 < itemsCount2 - 1 || itemFocus2 == 0){
            addStyle2(getItemFocus2(itemFocus2));
            removeStyle2(getItemFocus2(itemFocus2 + 1))
        }
        setPosition2();
        checkBtns2();
        
    });
    
    
    const setPosition2 = () =>{
        // смещение трека
        track2.style.transform = `translateX(${position2}px)`;
    };
    function checkBtns2(){
        prevButton2.disabled = position2 === 0;
        nextButton2.disabled = position2 <= -(itemsCount2 - slidesToShow2) * itemWidth2;

        if(prevButton2.disabled === true){
            prevButton2.classList.add('nonactive');
            prevButton2.classList.remove('active');
        }
        if(nextButton2.disabled === true){
            nextButton2.classList.add('nonactive');
            nextButton2.classList.remove('active');
        }
        if(prevButton2.disabled === false){
            prevButton2.classList.add('active');
            prevButton2.classList.remove('nonactive');
        }
        if(nextButton2.disabled === false){
            nextButton2.classList.add('active');
            nextButton2.classList.remove('nonactive');
        }
        setTimeout(checkBtns2, 1000);
    }
    
    function getItemFocus2(item2){
        for(let i = 0; i < itemsCount2; i++){
            if(item2 == i){
                return items2[i]
            }
        }
    }
        function addStyle2(item2){

        item2.classList.add('active-item');
        }
        function removeStyle2(item2){

            item2.classList.remove('active-item');

        }