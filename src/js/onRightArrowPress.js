import galleryRef from './galleryRef.js';
import lightboxImgRef from './lightboxImgRef.js';
import animationSwitchGalleryImg from './animationSwitchGalleryImg.js';
import replaceAttributeValueOnLightbox from './replaceAttributeValueOnLightbox.js';

export default function onRightArrowPress({ code }) {
    const nextImgRef = galleryRef
        .querySelector(`[data-source="${lightboxImgRef.src}"]`)
        .closest('.gallery__item')
        .nextElementSibling?.querySelector('.gallery__image');

    if (code === 'ArrowRight' && nextImgRef) {
        animationSwitchGalleryImg();
        replaceAttributeValueOnLightbox(nextImgRef.dataset.source, nextImgRef.alt);
    }
}
