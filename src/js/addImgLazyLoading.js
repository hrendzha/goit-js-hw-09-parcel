export default function addImgLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        const lazyImagesRef = document.querySelectorAll('img[loading="lazy"]');
        lazyImagesRef.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        const lazysizesScriptRef = document.createElement('script');
        lazysizesScriptRef.src =
            'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        lazysizesScriptRef.integrity =
            'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
        lazysizesScriptRef.crossorigin = 'anonymous';
        lazysizesScriptRef.referrerpolicy = 'no-referrer';

        document.body.appendChild(lazysizesScriptRef);
    }
}
