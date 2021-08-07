import galleryItems from './js/database/galleryItems.js';
import createGalleryItemsMarkup from './js/createGalleryItemsMarkup.js';
import addImgLazyLoading from './js/addImgLazyLoading.js';
import onFullImageOpenClick from './js/onFullImageOpenClick.js';
import onFullImageCloseClick from './js/onFullImageCloseClick.js';
import onGalleryLinkFocusWithTab from './js/onGalleryLinkFocusWithTab.js';

import galleryRef from './js/galleryRef.js';
import lightboxRef from './js/lightboxRef.js';

galleryRef.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems));

addImgLazyLoading();

galleryRef.addEventListener('click', onFullImageOpenClick);
lightboxRef.addEventListener('click', onFullImageCloseClick);
galleryRef.addEventListener('focusin', onGalleryLinkFocusWithTab);
