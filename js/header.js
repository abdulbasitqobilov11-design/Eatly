
const dropdown = document.querySelector('.dropdown');
const toggle = document.querySelector('.dropdown-toggle');



toggle.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});
const loading=document.querySelector(".loading");
window.addEventListener("load", ()=>{
  loading.classList.add("loading-hidden")
})



const burger = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileDrop = document.querySelector(".mobile-drop");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("d-none");
});
