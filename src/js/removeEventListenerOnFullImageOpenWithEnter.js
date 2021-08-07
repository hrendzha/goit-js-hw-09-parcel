import galleryRef from './galleryRef.js';
import onFullImageOpenWithEnter from './onFullImageOpenWithEnter.js';

export default function removeEventListenerOnFullImageOpenWithEnter() {
    galleryRef.removeEventListener('keydown', onFullImageOpenWithEnter);
}
