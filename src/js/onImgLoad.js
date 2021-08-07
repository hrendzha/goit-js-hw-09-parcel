import lightboxImgRef from './lightboxImgRef.js';

export default function onImgLoad() {
    lightboxImgRef.style.cssText =
        'transition: opacity var(--animation-duration) var(--timing-function)';
    lightboxImgRef.classList.replace('hide', 'back');
}
