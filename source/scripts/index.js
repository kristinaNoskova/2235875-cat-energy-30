/* в этот файл добавляет скрипты*/
const burgerButton = document.querySelector('.burger');
const siteList = document.querySelector('.site-list');

burgerButton.addEventListener('click', () => {
  siteList.classList.toggle('site-list--open');
  burgerButton.classList.toggle('burger--closed');
});
