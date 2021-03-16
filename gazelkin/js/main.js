var radi = document.getElementsByName('rad1');
var obji = ["var1", "var2", "var3"];

function funRadi() {
    for (var index = 0; index < radi.length; index++) {
        document.getElementById(obji[index]).classList.add('noSee');
        var element = radi[index];
        if (element.checked) {
            document.getElementById(obji[index]).classList.remove('noSee');
        }
    }
}


window.addEventListener('scroll', function () {
    let num = (document.documentElement.clientHeight) / 4;
    let elem = document.getElementById('mov0');
    if (elem.scrollWidth + num < document.documentElement.scrollTop) {
        document.getElementById('mov2').classList.add('animClip1');
        document.getElementById('mov1').classList.add('animClip2');
        document.getElementById('mov0').classList.add('animPuls');
    }
});

var elem = document.getElementById('mov4');
const pos = elem.getBoundingClientRect().top;
const clientH = document.documentElement.clientHeight;
window.addEventListener('scroll', function () {
    if (pos - clientH < document.documentElement.scrollTop) {
        document.getElementById('mov4').classList.add('animPuls');
    }
});



$('.image-popup-zoom').magnificPopup({
    type: 'image',
    zoom: {
        enabled: true,
        duration: 300
    }
});



$('.slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [{
            breakpoint: 1340,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                arrows: false,

            }
        }
    ]

});


$('.c-gamburg').on('click', function () {
    $('.c-gamburg').toggleClass('is-active');
    $('.menu').toggleClass('menu--active');
});