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
let toTopBtn = document.querySelector('.to-top-btn');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('__active-burger');
    mobileMenu.classList.toggle('__active-menu');
})
$('a[href*="#"]').on('click', function() {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
  return false;
});
window.addEventListener('scroll', function(e){
  if (window.scrollY>500){
    toTopBtn.classList.add('__active-top');
  }
  else{
    toTopBtn.classList.remove('__active-top');
  }
})

var openModalButtons = document.querySelectorAll('.main-btn');
/**var closeModalButton = document.getElementById("close-modal-button");**/
var modalOverlay = document.querySelector('.modal-window');

for(var n = 0; n < openModalButtons.length; n++){
  openModalButtons[n].addEventListener("click", function() {
    modalOverlay.classList.add('__active-modal')
  })     
}


/**closeModalButton.addEventListener("click", function() {
  modalOverlay.style.display = "none";
});**/
