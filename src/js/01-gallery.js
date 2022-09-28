import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.gallery'),
};

function makeGalleryMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join('');
}

refs.gallery.insertAdjacentHTML('afterbegin', makeGalleryMarkup(galleryItems));

const slider = new SimpleLightbox('.gallery__item', {
  disableRightClick: true,
  captionsData: 'alt',
  captionDelay: 250,
});
