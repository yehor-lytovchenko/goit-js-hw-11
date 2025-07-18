import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  createLightbox,
  hideLoader,
  showLoader,
  clearMarkUp,
} from './js/render-functions.js';

const formEl = document.querySelector('.form');

function onSubmit(e) {
  e.preventDefault();
}

formEl.addEventListener('submit', onSubmit);
