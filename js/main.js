// FAQ
// ==================================================
$(function(){
  $('.js-accordion').on('click',function(){
      $(this).next().slideToggle();
  })
});

// swipe
// ==================================================

// ふたつ目のスライドショー
const swiper = new Swiper('.swiper-container', {
  spaceBetween: 50,
  loop:true,
  centeredSlides:true,
  
  
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },

  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 3.5,
    },
  }
});


$(function(){
  $('.nav-btn').on('click',function(){
      $(this).toggleClass("-active");
      $('#nav').toggleClass("-active");
  })
});

// aosについて
AOS.init({
  easing: 'ease-in',
  duration: 500,

})

// フォームのチェック

$(document).ready(function () {

  const $submitBtn = $('#js-submit')
  
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

});

// スクロール
$('a[href^="#"]').click(function(){

  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top -100;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});