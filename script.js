(function(){
    signInButton();
    featuredActorsButton();
    infiniteScroll();
})()

function signInButton(){
    const signInButton = document.querySelector('.sign-in')
    signInButton.addEventListener('click', () => {
        window.location.href = 'register.html'
    })
}

function featuredActorsButton(){
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let index = 0;
    const slideWidth = document.querySelector('.carousel div').offsetWidth + 20;
    const visibleSlides = Math.floor(document.querySelector('.carousel-container').offsetWidth / slideWidth);
    const maxIndex = carousel.children.length - visibleSlides;

    nextBtn.addEventListener('click', () => {
        if (index < maxIndex - 1) {
            index++;
            carousel.style.transform = `translateX(${-slideWidth * index}px)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
            carousel.style.transform = `translateX(${-slideWidth * index}px)`;
        }
    });
}

function infiniteScroll(){
    if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
        addInfiniteScrollerAnimation();
    }
}

function addInfiniteScrollerAnimation(){
    const scroller = document.querySelector('.scroller')
    scroller.setAttribute('data-animated', true)

    const scrollerInner = scroller.querySelector('.scroller-inner');
    const scrollerContent = Array.from(scrollerInner.children)

    scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        scrollerInner.appendChild(duplicatedItem)
    })
}

