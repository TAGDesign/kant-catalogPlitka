const geo = document.getElementById("geoConfirm");
const scrollTop = document.getElementById("scrollTop");
const searchHint = document.getElementById("searchHint");
const hints = ["куртка", "сноуборд", "ботинки", "шлем", "Поиск по сайту"];
let hintIndex = 0;

if (searchHint) {
  setInterval(() => {
    hintIndex = (hintIndex + 1) % hints.length;
    searchHint.textContent = hints[hintIndex];
  }, 2200);
}

document.getElementById("geoYes")?.addEventListener("click", () => {
  geo?.remove();
});

window.addEventListener("scroll", () => {
  scrollTop?.classList.toggle("is-visible", window.scrollY > 400);
});

scrollTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const catalogDropdown = document.getElementById("catalogDropdown");
const catalogBtn = document.getElementById("catalogBtn");

catalogBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = catalogDropdown.classList.toggle("is-open");
  catalogBtn.setAttribute("aria-expanded", String(open));
});

document.addEventListener("click", (e) => {
  if (catalogDropdown && !catalogDropdown.contains(e.target)) {
    catalogDropdown.classList.remove("is-open");
    catalogBtn?.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && catalogDropdown?.classList.contains("is-open")) {
    catalogDropdown.classList.remove("is-open");
    catalogBtn?.setAttribute("aria-expanded", "false");
    catalogBtn?.focus();
  }
});
