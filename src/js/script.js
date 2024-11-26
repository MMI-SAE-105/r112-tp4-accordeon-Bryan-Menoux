// *** ACCORDEON ***
let accordeon = document.querySelector(".accordeon");

accordeon.addEventListener("click", () => {
  accordeon.querySelectorAll("details").forEach((det) => (det.open = false));
});
