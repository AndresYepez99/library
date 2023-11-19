'use strict';


const elBody = document.querySelector('body');
const elNavbar = document.querySelector('.book-library__navbar');
const elFormContainer = document.querySelector('.book-library__form-container');
const elForm = document.querySelector('.book-info__form');
const elBooksCards = document.querySelector('.my-books-cards');
const elBookInfo = document.querySelector('.book-library__book-info');

const elBtnHeaderOpenMenu = document.querySelector('.book-library__menu-btn');
const elBtnNavbarCloseMenu = document.querySelector('.book-library__nav-btn-close');
const elBtnNavbarOpenForm = document.querySelector('.nav-btn-open-form');
const elBtnAddBookOpenForm = document.querySelector('.book-library__btn-add-book');
const elBtnFormCloseForm = document.querySelector('.form-btn-close');
const elBtnCloseBookInfo = document.querySelector('.book-info__btn-close');
const elBtnTheme = document.querySelector('.btn-theme');
const arrBtnsLayout = [...document.querySelectorAll('.btn-layout')];





export {
  elBody,
  elNavbar,
  elFormContainer,
  elForm,
  elBooksCards,
  elBookInfo,
  elBtnHeaderOpenMenu,
  elBtnNavbarCloseMenu,
  elBtnNavbarOpenForm,
  elBtnAddBookOpenForm,
  elBtnFormCloseForm,
  elBtnCloseBookInfo,
  elBtnTheme, 
  arrBtnsLayout
}