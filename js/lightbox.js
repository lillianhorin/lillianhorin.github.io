document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  function openLightbox(src, alt = "") {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.style.display = "flex";
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // optional: prevent page scroll while open
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    lightboxImg.src = "";
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // restore scrolling
  }

  // Hook up photo links (.photo-item assumed to be <a href="full.jpg">)
  document.querySelectorAll(".photo-item").forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      const href = item.getAttribute("href");
      const alt = item.querySelector("img")?.alt || "";
      openLightbox(href, alt);
    });
  });

  // Close via X button
  closeBtn.addEventListener("click", closeLightbox);

  // Close when clicking outside the image (i.e., the overlay background)
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });

  // Close on ESC
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && lightbox.style.display === "flex") closeLightbox();
  });

  // small precaution: prevent right-click & drag on images
  document.addEventListener("contextmenu", e => {
    if (e.target.tagName === "IMG" && e.target.closest(".lightbox")) {
      e.preventDefault();
    }
  });
});
