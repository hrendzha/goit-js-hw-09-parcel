import onEscKeyPress from './onEscKeyPress.js';

export default function removeEventListenerOnEscKeyPress() {
    window.removeEventListener('keydown', onEscKeyPress);
}
