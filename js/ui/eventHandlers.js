'use stritc';
import {
  elBody,
  elNavbar,
  elForm,
  elBooksCards,
  elBookInfo,
  elFormContainer,
  elBtnHeaderOpenMenu,
  elBtnNavbarCloseMenu,
  elBtnNavbarOpenForm,
  elBtnAddBookOpenForm,
  elBtnFormCloseForm,
  elBtnCloseBookInfo,
  elBtnTheme,
  arrBtnsLayout,
} from './domManipulation.js';

const toggleBody = () => elBody.classList.toggle('dark');
const toggleMenu = () => elNavbar.classList.toggle('open-navbar');
const toggleForm = (element, elementClass) => element.classList.toggle(elementClass);
const toggleBookInfo = () => elBookInfo.classList.toggle('open-book-info');

const toggleGridBooksCards = function (btn) {
  btn.classList.toggle('btn-layout-is-active');
  elBooksCards.classList.toggle('grid-view');
};

const handleFormButtonClick = function () {
  const screenWidth = window.innerWidth;
  const element = screenWidth >= 1023 ? elFormContainer : elForm;
  const formClass =
    screenWidth >= 500 && screenWidth < 1023 ? 'open-left-form' : 'open-form';

  toggleForm(element, formClass);
};

const handleBookCardsClick = (event) => {
  if (event.target.classList.contains('book-card')) toggleBookInfo();
};

const handleThemeButtonClick = () => {
  const themeIcon = elBtnTheme.querySelector('i');
  const themeText = elBtnTheme.querySelector('span');

  themeIcon.classList.toggle('ri-sun-line');
  themeText.textContent = themeIcon.classList.contains('ri-sun-line')
    ? 'Light Theme'
    : 'Dark Theme';

  toggleBody();
};

function startEventHandlers() {
  elBtnHeaderOpenMenu.addEventListener('click', toggleMenu);
  elBtnNavbarCloseMenu.addEventListener('click', toggleMenu);
  elBtnAddBookOpenForm.addEventListener('click', handleFormButtonClick);
  elBtnNavbarOpenForm.addEventListener('click', handleFormButtonClick);
  elBtnFormCloseForm.addEventListener('click', handleFormButtonClick);
  elBooksCards.addEventListener('click', handleBookCardsClick);
  elBtnCloseBookInfo.addEventListener('click', toggleBookInfo);

  for (const btn of arrBtnsLayout)
    btn.addEventListener('click', () => toggleGridBooksCards(btn));

  elBtnTheme.addEventListener('click', handleThemeButtonClick);
}

export { startEventHandlers };
