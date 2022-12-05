
const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-navigation__toggle');

const toggleMenu = () => {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
}

const switchMenu = () => {
  navMain.classList.remove('main-navigation--nojs');
  navToggle.addEventListener('click', toggleMenu);
}

export { switchMenu };
