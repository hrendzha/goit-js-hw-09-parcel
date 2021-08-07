import lightboxRef from './lightboxRef.js';
import removeEventListenerOnFullImageOpenWithEnter from './removeEventListenerOnFullImageOpenWithEnter.js';
import onEscKeyPress from './onEscKeyPress.js';
import switchesGalleryWithArrows from './switchesGalleryWithArrows.js';
import toggleClassOnLightbox from './toggleClassOnLightbox.js';
import replaceAttributeValueOnLightbox from './replaceAttributeValueOnLightbox.js';

export default function onFullImageOpenWithEnter({ code, target }) {
    if (lightboxRef.classList.contains('is-open')) return;

    if (code === 'Tab') {
        removeEventListenerOnFullImageOpenWithEnter();
        return;
    }

    const originalImgUrl = target.firstElementChild.dataset.source;
    const imgDesc = target.firstElementChild.alt;

    if (code === 'Enter') {
        window.addEventListener('keydown', onEscKeyPress);
        switchesGalleryWithArrows();

        toggleClassOnLightbox();
        replaceAttributeValueOnLightbox(originalImgUrl, imgDesc);
    }
}
