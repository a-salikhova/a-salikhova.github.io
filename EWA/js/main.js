$('.review-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [{
            breakpoint: 1220,
            settings: {

                slidesToShow: 2,
            }
        },
        {
            breakpoint: 670,
            settings: {
                arrows: false,
                slidesToShow: 1,
            }
        }

    ]

});

// $('.c-gamburg').on('click', function () {
//     $('.c-gamburg').toggleClass('is-active');
//     $('.menu').toggleClass('menu--active');
//     $('.footer-inner').toggleClass('footer-inner--active');

// });