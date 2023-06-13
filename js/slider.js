
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = document.querySelector('.slider-container');
    const track = document.querySelector('.slider-track');
    const items = document.querySelectorAll('.slider-item');
    const itemsCount = items.length;
    const nextButton = document.querySelector('.slider-next');
    const prevButton = document.querySelector('.slider-prev');
    const widthFocusItem = 500;
    //ширина каждого элемента
    const itemWidth = 270 / slidesToShow;
    // 
    const movePosition = slidesToScroll * itemWidth;
    let itemFocus = 0;
    

    items.forEach((item)=>{
        // задаём ширину каждому элементу в css
        item.style.minWidth = `${itemWidth}px`;
        
    });
    addStyle(getItemFocus(itemFocus))
    
    nextButton.addEventListener('click', () => {
        const itemsLeft = itemsCount -(Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        itemFocus += 1;
        if(itemFocus > itemsCount - 1){
            itemFocus = itemsCount - 1;
        }else if(itemFocus < itemsCount){
            addStyle(getItemFocus(itemFocus));
            removeStyle(getItemFocus(itemFocus - 1))
        }
        setPosition();
        checkBtns();
        
    });
    prevButton.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        itemFocus -= 1;
        if(itemFocus < 0){
            itemFocus = 0;
        }else if(itemFocus == itemsCount - 1 ||  itemFocus < itemsCount - 1 || itemFocus == 0){
            addStyle(getItemFocus(itemFocus));
            removeStyle(getItemFocus(itemFocus + 1))
        }
        setPosition();
        checkBtns();
        
    });
    
    
    const setPosition = () =>{
        // смещение трека
        track.style.transform = `translateX(${position}px)`;
    };
    
    const checkBtns = () =>{
        prevButton.disabled = position === 0;
        nextButton.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
        setTimeout(checkBtns, 1000);
    };
    
    function getItemFocus(item){
        for(let i = 0; i < itemsCount; i++){
            if(item == i){
                return items[i]
            }
        }
    }
        function addStyle(item){
           item.style.minWidth = `${widthFocusItem}px`
        }
        function removeStyle(item){
            item.style.minWidth = `${itemWidth}px`;
        }