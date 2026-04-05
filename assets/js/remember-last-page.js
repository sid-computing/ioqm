(() => {
  // Call once on each page load to remember where the student was.
  // Keeps it simple and privacy-friendly: localStorage only.
  function remember() {
    try {
      const path = window.location.pathname.split("/").pop() || "index.html";
      const title = document.title || "IOQM";

      const data = {
        path,
        title,
        lastVisited: Date.now()
      };

      localStorage.setItem("ioqm:lastPage", JSON.stringify(data));
    } catch {
      // If storage is blocked, silently ignore.
    }
  }

  // Avoid overwriting the last “useful” page with the homepage itself, if desired.
  // If you DO want homepage as last page, remove this condition.
  const isHome =
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("/index.html");

  if (!isHome) remember();
})();
