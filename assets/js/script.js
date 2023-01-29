$('.slider').slick({
    infinite: true,
    fade: true,
    cssEase: 'linear',
    dots: false,
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'), 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 8000,
  });

$(function () {
    $('input[type="tel"]').mask('+7(000)000-00-00');
});

let menuBurger = document.querySelector('.menu-burger-inner');
let mobileMenu = document.querySelector('.mobile-menu');
menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('__active-burger');
    mobileMenu.classList.toggle('__active-menu');
})
$('a[href*="#"]').on('click', function() {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 400);
  return false;
});