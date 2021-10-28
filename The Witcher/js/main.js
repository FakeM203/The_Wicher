const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,
  navigation:{
     nextEl: '.arrow',
   },
    breakpoints: {
    540: {
      slidesPerView: 2,
    }
  }
});

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button-active')
  console.log('Клик по кнопке')
  menu.classList.toggle('menu-active');
})