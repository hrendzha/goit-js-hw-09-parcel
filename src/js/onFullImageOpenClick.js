import removeEventListenerOnFullImageOpenWithEnter from './removeEventListenerOnFullImageOpenWithEnter.js';
import onEscKeyPress from './onEscKeyPress.js';
import toggleClassOnLightbox from './toggleClassOnLightbox.js';
import replaceAttributeValueOnLightbox from './replaceAttributeValueOnLightbox.js';
import switchesGalleryWithArrows from './switchesGalleryWithArrows.js';

export default function onFullImageOpenClick(event) {
    event.preventDefault();

    const { target } = event;

    if (target.nodeName !== 'IMG') return;

    removeEventListenerOnFullImageOpenWithEnter();
    window.addEventListener('keydown', onEscKeyPress);

    const originalImgUrl = target.dataset.source;
    const imgDesc = target.alt;

    toggleClassOnLightbox();
    replaceAttributeValueOnLightbox(originalImgUrl, imgDesc);
    switchesGalleryWithArrows();
}
