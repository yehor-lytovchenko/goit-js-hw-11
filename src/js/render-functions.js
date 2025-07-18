import SimpleLightbox from 'simplelightbox';

export function createGallery(arr) {
  return arr
    .map(
      item =>
        `<li><a href="${item.largeImageURL}"><img src="${item.webformatURL}" alt="picture" width="360" height="200"></a></li>`
    )
    .join('');
}

const gallery = new SimpleLightbox('.gallery a');
const loaderEl = document.querySelector('.loader');
const galleryEl = document.querySelector('.gallery');

export function createLightbox() {
  gallery.refresh();
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function clearMarkUp() {
  galleryEl.innerHTML = '';
}
