
const dropdown = document.querySelector('.dropdown');
const toggle = document.querySelector('.dropdown-toggle');



toggle.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});
window.addEventListener("load", () => {
  const loading = document.querySelector(".loading");
  if (!loading) return;

  setTimeout(() => {
    loading.remove();
  }, 2000);
});



const burger = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileDrop = document.querySelector(".mobile-drop");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("d-none");
});
