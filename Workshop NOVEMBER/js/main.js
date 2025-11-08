const modalWindow = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.modal__button');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('body');


// Открытие модалки при нажатии на кнопку "Оставить заявку"
buttonModals.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        body.classList.add('noscroll');
    });
});


// Закрытие модалки при нажатии вне модального окна
modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');

    if(!isModal) {
        modalWindow.style.display = 'none';
        body.classList.remove('noscroll');
    }    
});


// Закрытие модалки при нажатии на крестик
modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    body.classList.remove('noscroll');
});