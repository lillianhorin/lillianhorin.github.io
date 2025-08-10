$(function () {
  // Get the pathname split into parts (no empty strings)
  let pathParts = window.location.pathname.split("/").filter(Boolean);

  // If the last part doesn't contain a ".", assume it's a folder, so add a fake "index.html"
  if (!pathParts.length || !pathParts[pathParts.length - 1].includes(".")) {
    pathParts.push("index.html");
  }

  // Depth is path length minus the filename
  let depth = pathParts.length - 1;

  // Build the prefix (e.g. "", "../", "../../")
  let prefix = "";
  for (let i = 0; i < depth; i++) {
    prefix += "../";
  }

  // Load the shared components
  $("#name").load(prefix + "title.html");
  $("#nav").load(prefix + "nav.html");
  $("#footer").load(prefix + "footer.html");
});