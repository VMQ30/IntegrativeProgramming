(function(){
    featuredActorsButton();
})()

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