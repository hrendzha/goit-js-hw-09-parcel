import onFullImageOpenWithEnter from './onFullImageOpenWithEnter.js';

export default function onGalleryLinkFocusWithTab({ currentTarget }) {
    currentTarget.addEventListener('keydown', onFullImageOpenWithEnter);
}
