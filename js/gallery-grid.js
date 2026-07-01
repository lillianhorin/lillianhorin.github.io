// gallery-grid.js
// Auto-builds the photography masonry grid from a folder in your GitHub repo.
// Drop a photo into the folder, push it, and it shows up here — no HTML editing.

(function () {
  // --- CONFIGURE THESE TWO VALUES FOR YOUR REPO ---
  const GITHUB_USER = "lillianhorin";
  const GITHUB_REPO  = "lillianhorin.github.io"; // update if your repo has a different name
  const IMAGE_FOLDER = "img/photography/singles";
  // --------------------------------------------------

  const VALID_EXTENSIONS = /\.(jpe?g|png|webp|gif)$/i;
  const API_URL = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${IMAGE_FOLDER}`;

  const grid = document.getElementById("photo-grid");
  if (!grid) return;

  fetch(API_URL)
    .then((res) => {
      if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
      return res.json();
    })
    .then((files) => {
      const images = files
        .filter((f) => f.type === "file" && VALID_EXTENSIONS.test(f.name))
        .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

      grid.innerHTML = ""; // clear the "Loading..." placeholder

      if (!images.length) {
        grid.innerHTML = `<p class="gallery-empty">No photos here yet.</p>`;
        return;
      }

      images.forEach((file) => {
        const src = `${IMAGE_FOLDER}/${file.name}`;
        const alt = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");

        const link = document.createElement("a");
        link.href = src;
        link.className = "photo-item";

        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        img.loading = "lazy";

        link.appendChild(img);
        grid.appendChild(link);
      });
    })
    .catch((err) => {
      console.error("Could not load gallery:", err);
      grid.innerHTML = `<p class="gallery-error">Couldn't load the gallery right now — try refreshing.</p>`;
    });
})();
