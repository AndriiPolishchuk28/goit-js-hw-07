import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

const markUpGallery = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `
  )
  .join("");

galleryRef.innerHTML = markUpGallery;

let gallery = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: 300,
});
