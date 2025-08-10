document.addEventListener("DOMContentLoaded", () => {
  const projectModules = document.querySelectorAll('.project-module');

  projectModules.forEach(module => {
    const textContainer = module.querySelector('.project-text');

    // Create meta line
    const year = module.dataset.year || '';
    const tags = module.dataset.tags || '';
    if (year || tags) {
      const metaDiv = document.createElement('div');
      metaDiv.className = 'project-meta';
      metaDiv.innerHTML = `${year} – <span class="tags">${tags}</span>`;
      textContainer.appendChild(metaDiv);
    }

    // Create link
    const url = module.dataset.link || '#';
    const link = document.createElement('a');
    link.href = url;
    link.textContent = "Project details coming soon";
    // link.textContent = "View project →";
    // link.className = "view-project-link";
    textContainer.appendChild(link);
  });
});
