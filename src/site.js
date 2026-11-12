function setCurrentNav() {
  const path = location.pathname.replace(/\/$/, "") || "/";
  const file = path.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const href = a.getAttribute("href") || "";
    const target = href.split("/").pop();
    const isHome =
      (file === "" || file === "index.html" || file === "/") &&
      (target === "index.html" || target === "./" || target === "/");
    const match = isHome || target === file;
    if (match) a.setAttribute("aria-current", "page");
  });
}

function observeReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  nodes.forEach((n) => io.observe(n));
}

function yearStamp() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

setCurrentNav();
observeReveal();
yearStamp();
