// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onClickOpenImg);

const imgItems = galleryItems.map(({ preview, original, description }) =>
    ` <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                width='360'
            />
        </a>
    </li>`
).join('');

gallery.insertAdjacentHTML('beforeend', imgItems);

function onClickOpenImg(event) {
    event.preventDefault();

    const { target } = event;

    if (!target.classList.contains('gallery__image')) {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${target.dataset.source}" alt="${target.alt}" width="1280">`
    )
    instance.show();

    const keyPress = event => {
        if (event.code === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', keyPress);
        }
    };

    if (instance.show()) {
        document.addEventListener('keydown', keyPress);
    }

}