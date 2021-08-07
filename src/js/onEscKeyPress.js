import toggleClassOnLightbox from './toggleClassOnLightbox.js';
import clearAttributeValueUrl from './clearAttributeValueUrl.js';
import removeEventListenerOnEscKeyPress from './removeEventListenerOnEscKeyPress.js';
import removeEventListenersOnArrowsPress from './removeEventListenersOnArrowsPress.js';

export default function onEscKeyPress({ code }) {
    if (code === 'Escape') {
        toggleClassOnLightbox();
        setTimeout(clearAttributeValueUrl, 250);

        removeEventListenerOnEscKeyPress();
        removeEventListenersOnArrowsPress();
    }
}
