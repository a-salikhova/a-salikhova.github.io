$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu').toggleClass('menu--active');
  });


  $('.slider').slick({
    arrows: false,
    fade: true,
    dots: true,
    autoplay: 3000
  });

  $('.slider-min').slick({
    arrows: false,
    fade: true,
    dots: true,
    autoplay: 3000
  });





});

if (document.documentElement.clientWidth >= 735) {
  document.getElementById("btn").style.opacity = "0";
  // console.log('document.documentElement.clientWidth   ' + document.documentElement.clientWidth);
} else {
  document.getElementById("btn").style.opacity = "1";
  //console.log('document.documentElement.clientWidth   ' + document.documentElement.clientWidth);
}

const progress = document.querySelector('.probar');
window.addEventListener('scroll', progressbar);


function progressbar(ev) {
  const windowScroll = document.documentElement.scrollTop;
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  per = windowScroll / windowHeight * 100;
  progress.style.width = per + '%';
  // progress.innerText = Math.floor(per)+ '%';
}

var num = document.documentElement.clientHeight / 5 * 4;
// console.log(num);

$(window).scroll(function () {
  $('.mov').each(function () {
    const imagePos = $(this).offset().top;
    const topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + num) {
      $(this).addClass('animate__animated animate__backInRight');
      document.getElementById("see").style.transitionDelay = "0.8s";
      document.getElementById("see").style.opacity = "1";
    } else {
      document.getElementById("see").style.opacity = "0";
    }
  });
});