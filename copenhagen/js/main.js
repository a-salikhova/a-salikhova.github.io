$(function(){
/*
    $('.menu_btn').on('click',function(){
       $('.menu_list').toggleClass('menu_list-active');
    });*/

  
$('.menu_btn').on('click',function(){
     if ($('.menu_list').hasClass('menu_list-active')) {
                $('.menu_list').removeClass('menu_list-active');
            }
            else {
                $('.menu_list').addClass('menu_list-active');
            }

        });



    $('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    }
  
    });


    $('.inform_slider-img').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     asNavFor: '.inform_slider-text',
     prevArrow: '<button  class="slick_btn slick-prev"> <img src="images/left_min.png" alt="Нет"></button>',
     nextArrow: '<button  class="slick_btn slick-next"> <img src="images/right_min.png" alt="Нет право"></button>'
     
    
     
    });
      

    $('.inform_slider-text').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     asNavFor: '.inform_slider-img',
     fade: true,
     arrows:false
     
    });



$('.day_vizual-slider').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '.day_vizual-slider-tx',
     autoplay: true,
     autoplaySpeed: 3000,
     arrows:false

 

      });

    $('.day_vizual-slider-tx').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '.day_vizual-slider',
     autoplay: true,
     autoplaySpeed: 3000,
     arrows:false

     
    });














});
