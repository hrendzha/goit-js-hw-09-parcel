import onRightArrowPress from './onRightArrowPress.js';
import onLeftArrowPress from './onLeftArrowPress.js';

export default function removeEventListenersOnArrowsPress() {
    window.removeEventListener('keydown', onRightArrowPress);
    window.removeEventListener('keydown', onLeftArrowPress);
}
