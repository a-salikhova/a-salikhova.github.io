var position = $( '.vert' ).offset();
$( '.vert' ).css( 'margin-left','-'+ position.left + 'px' );



$('.image-popup').magnificPopup({ // картинка без анимации
 type: 'image'
  });



 const cards = document.querySelectorAll('.card'); // блок для изменения наклона карточек при наведении
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startrotate);
    card.addEventListener('mouseout', stoprotate);
}

function startrotate(event) {
    
    const cardItem = this.querySelector('.card__item');
    // cardItem.innerText = event.offsetX+' '+event.offsetY;
    const halfHeight =cardItem.offsetHeight/2;
    const halfWidth =cardItem.offsetWidth/2;
   cardItem.style.transform = 'rotateX('+-(event.offsetY-halfHeight)/5+'deg) rotateY('+-(event.offsetX-halfWidth)/5+'deg)';

}

function stoprotate(event){
 const cardItem = this.querySelector('.card__item');
 cardItem.style.transform ='rotate(0)';

}



// $('.c-gamburg').on('click',function(){
//    document.querySelector('.c-gamburg').classList.toggle('is-active');
//  document.querySelector('.menu__list').classList.toggle('list--active');
// });




$('.c-gamburg').on('click',function(){
   document.querySelector('.c-gamburg').classList.toggle('is-active');
 document.querySelector('.menu').classList.toggle('menu--active');
});

