$(function(){
  
 $('.progress__slider').slick({
   prevArrow:'<button type="button" class="slick-prev"><img src="img/left_min2.png"></button>',
   nextArrow:'<button type="button" class="slick-next"><img src="img/right_min2.png"></button>'
 });

});

$('.menu__btn').on('click',function(){
  $('.menu__list').slideToggle();
});

/*function openMore(){
  if (document.getElementById("more").style.display == none) {
    document.getElementById("more").style.display="inline";
    document.getElementById("dots").style.display="none";
  }else{
    document.getElementsById("more").style.display="none";
    document.getElementsById("dots").style.display="inline";
  }

  }*/
 
function openTel(){
  if (document.getElementById("cont").innerHTML=="Контакты"){
    document.getElementById("cont").innerHTML="(097) 382-89-**";
  }else
    document.getElementById("cont").innerHTML="Контакты";
    }




function readMore(){
  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  var btn = document.getElementById("btn");
 
  if (more.style.display=="none"){
    more.style.display="inline";
    dots.style.display="none";
    btn.innerHTML="Скрыть";
  } else{
     more.style.display="none";
     dots.style.display="inline";
     btn.innerHTML="Продолжить";
  }

}
