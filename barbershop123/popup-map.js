let maplink = document.querySelector('.contacts-button-map');
let popupmap = document.querySelector('.modal-map');
let showmap = document.querySelector('.showmap');
let popupmapclose = popupmap.querySelector('.modal-close');



maplink.addEventListener('click',function(evt) {
    evt.preventDefault();
    popupmap.classList.add('modal-map-show');
});
showmap.addEventListener('click',function (evt){
    evt.preventDefault();
    popupmap.classList.add('modal-map-show');
});

popupmapclose.addEventListener('click',function (evt) {
    evt.preventDefault();
    popupmap.classList.remove('modal-map-show');
    console.log('клик по крестику');
});
