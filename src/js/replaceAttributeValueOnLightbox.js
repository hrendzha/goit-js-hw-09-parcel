import lightboxImgRef from './lightboxImgRef.js';

export default function replaceAttributeValueOnLightbox(imgUrl, imgDesc) {
    lightboxImgRef.src = imgUrl;
    lightboxImgRef.alt = imgDesc;
}
