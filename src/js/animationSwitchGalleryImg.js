import lightboxImgRef from './lightboxImgRef.js';
import onImgLoad from './onImgLoad.js';

export default function animationSwitchGalleryImg() {
    if (lightboxImgRef.classList.contains('back')) {
        lightboxImgRef.classList.replace('back', 'hide');
    } else {
        lightboxImgRef.classList.add('hide');
    }

    lightboxImgRef.addEventListener('load', onImgLoad);
    lightboxImgRef.style = '';
}
