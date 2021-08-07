import galleryRef from './galleryRef.js';
import lightboxImgRef from './lightboxImgRef.js';
import animationSwitchGalleryImg from './animationSwitchGalleryImg.js';
import replaceAttributeValueOnLightbox from './replaceAttributeValueOnLightbox.js';

export default function onLeftArrowPress({ code }) {
    const previousImgRef = galleryRef
        .querySelector(`[data-source="${lightboxImgRef.src}"]`)
        .closest('.gallery__item')
        .previousElementSibling?.querySelector('.gallery__image');

    if (code === 'ArrowLeft' && previousImgRef) {
        animationSwitchGalleryImg();
        replaceAttributeValueOnLightbox(previousImgRef.dataset.source, previousImgRef.alt);
    }
}
