import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

const markUpGallery = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
  )
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", markUpGallery);

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  galleryRef.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
});
