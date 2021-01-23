let link = document.querySelector('.login-link');
let popuplogin = document.querySelector('.modal-login');
let popupclose = document.querySelector('.modal-close');
let login = popuplogin.querySelector('[name=login]');
let pass = popuplogin.querySelector('[name=password]');
let form = popuplogin.querySelector('form');


link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popuplogin.classList.add('modal-show');
    login.focus();
    console.log('Клик по ссылке вход');


});
popupclose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popuplogin.classList.remove('modal-show');
    console.log('клик по крестику');
});

form.addEventListener('submit', function (evt) {

        if (!login.value || !pass.value) {
            evt.preventDefault();
            console.log ('нужно ввести логин и пароль')
            alert("Hello");
        }



});

