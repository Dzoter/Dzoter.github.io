let link = document.querySelector('.login-link');
let popuplogin = document.querySelector('.modal-login');
let popupclose = document.querySelector('.modal-close');
let login = popuplogin.querySelector('[name=login]');
let pass = popuplogin.querySelector('[name=password]');
let form = popuplogin.querySelector('form');


let storage = '';
let isStorageSupport = true;//по умолчанию мы верим, что локальное хранилище есть в браузере

try {
    storage = localStorage.getItem('login'); //Ловим ошибки ебатать.
} catch (err) {
    isStorageSupport = false; // тот самый момент, когда ты запаролся с двумя переменными.
}


link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popuplogin.classList.add('modal-show'); //добавили цсс свойство для отображения модального окна
    console.log('Клик по ссылке вход');
    if (storage) {
        login.value = storage;
        pass.focus();
    } else {
        login.focus(); //если нет в хранилище логина, то меню ввода логина на фокусе
    }


});
popupclose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popuplogin.classList.remove('modal-show'); //закрыть модальное окно
    console.log('клик по крестику');
    popuplogin.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
    if (!login.value || !pass.value) { //если !нет логина или || пароля
        evt.preventDefault();
        popuplogin.classList.remove('modal-error');
        console.log('нужно ввести логин и пароль');
        popuplogin.offsetWidth = popuplogin.offsetWidth;
        popuplogin.classList.add('modal-error');

    } else {
        if (isStorageSupport) {
            localStorage.setItem('login', login.value);
        }
    }

});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (popuplogin.classList.contains('modal-show')) {
            evt.preventDefault();
            popuplogin.classList.remove('modal-show'); //убираем модальное окно по кнопке esc (27)
        }
    }
});
