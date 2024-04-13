// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('ul.gallery');
let photosMarkup = creatGalleryItem(galleryItems);

function creatGalleryItem(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<a class = 'galley_item' href = "${original}" >
                <img class= 'gallery_image' src = "${preview}" alt = "${description}"/>  
              </a>`;
    })
    .join('');
}
galleryContainer.insertAdjacentHTML('beforeend', photosMarkup);

const galleryHandler = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 2500,
});
galleryHandler.on(show.SimpleLightbox);
