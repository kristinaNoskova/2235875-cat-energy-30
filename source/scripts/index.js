/* в этот файл добавляет скрипты*/
const mainNav = document.querySelector('.main-nav');
const burgerButton = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');


burgerButton.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--opened');
  mainNav.classList.toggle('main-nav--closed');
  burgerButton.classList.toggle('animate');
});
