import onLeftArrowPress from './onLeftArrowPress.js';
import onRightArrowPress from './onRightArrowPress.js';

export default function switchesGalleryWithArrows() {
    window.addEventListener('keydown', onLeftArrowPress);
    window.addEventListener('keydown', onRightArrowPress);
}
