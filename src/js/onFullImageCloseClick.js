import toggleClassOnLightbox from './toggleClassOnLightbox.js';
import clearAttributeValueUrl from './clearAttributeValueUrl.js';
import removeEventListenerOnEscKeyPress from './removeEventListenerOnEscKeyPress.js';
import removeEventListenersOnArrowsPress from './removeEventListenersOnArrowsPress.js';

export default function onFullImageCloseClick({ target }) {
    const lightboxBtnCloseRef = document.querySelector('[data-action="close-lightbox"]');
    const lightboxOverlayRef = document.querySelector('.lightbox__overlay');

    if (target === lightboxBtnCloseRef || target === lightboxOverlayRef) {
        toggleClassOnLightbox();
        setTimeout(clearAttributeValueUrl, 250);

        removeEventListenerOnEscKeyPress();
        removeEventListenersOnArrowsPress();
    }
}
