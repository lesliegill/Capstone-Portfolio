
const element =  document.querySelector('.my-example')
element.classList.add('animated', 'bounceOutLeft')

window.addEventListener('scroll', () => {


});



const scroll = new SmoothScroll('a[href*="#"]', {
    speed:800
});
