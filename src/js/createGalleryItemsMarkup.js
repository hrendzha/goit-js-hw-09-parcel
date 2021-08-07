export default function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(
            ({ preview, original, description }) =>
                `   <li class="gallery__item">
                <a
                    class="gallery__link"
                    href="${original}"
                >
                    <img
                        class="gallery__image lazyload"
                        data-src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        loading="lazy"
                    />
                </a>
                </li>`,
        )
        .join('');
}
