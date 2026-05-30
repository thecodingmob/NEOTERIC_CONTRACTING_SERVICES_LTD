const menubar = document.getElementById("menu");
const nav = document.getElementById("navLinks");

menubar.addEventListener("click", () => {
  const icon = menubar.querySelector("i");
  icon.classList.toggle("fa-times");
  icon.classList.toggle("fa-bars");
  nav.classList.toggle("open");
});
