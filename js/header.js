
const dropdown = document.querySelector('.dropdown');
const toggle = document.querySelector('.dropdown-toggle');



toggle.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loading = document.querySelector(".loading");
    if (loading) {
      loading.style.display = "none";
    }
  }, 2000);
});




const burger = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileDrop = document.querySelector(".mobile-drop");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("d-none");
});
