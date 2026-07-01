document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  const leftArrow = document.querySelector(".lightbox-arrow.left");
  const rightArrow = document.querySelector(".lightbox-arrow.right");
  const photoItems = Array.from(document.querySelectorAll(".photo-item"));
  let currentIndex = 0;

  function openLightbox(src, alt = "", index = 0) {
    currentIndex = index;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.style.display = "flex";
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Disable interactions with widgets
    document.querySelectorAll(".pinterest-button, .share-widget").forEach(el => el.style.pointerEvents = "none");
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    lightboxImg.src = "";
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Re-enable widgets
    document.querySelectorAll(".pinterest-button, .share-widget").forEach(el => el.style.pointerEvents = "");
  }

  function showImage(index) {
    currentIndex = (index + photoItems.length) % photoItems.length;
    const src = photoItems[currentIndex].getAttribute("href");
    const alt = photoItems[currentIndex].querySelector("img")?.alt || "";
    lightboxImg.src = src;
    lightboxImg.alt = alt;
  }

  // Photo click
  photoItems.forEach((item, index) => {
    item.addEventListener("click", e => {
      e.preventDefault();
      openLightbox(item.getAttribute("href"), item.querySelector("img")?.alt || "", index);
    });
  });

  // Close lightbox
  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });

  // Arrow click
  leftArrow.addEventListener("click", () => showImage(currentIndex - 1));
  rightArrow.addEventListener("click", () => showImage(currentIndex + 1));

  // Keyboard navigation
  document.addEventListener("keydown", e => {
    if (lightbox.style.display !== "flex") return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") showImage(currentIndex + 1);
    else if (e.key === "ArrowLeft") showImage(currentIndex - 1);
  });

  // Prevent right-click on lightbox image
  document.addEventListener("contextmenu", e => {
    if (e.target.tagName === "IMG" && e.target.closest(".lightbox")) e.preventDefault();
  });
});
