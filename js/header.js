
const dropdown = document.querySelector('.dropdown');
const toggle = document.querySelector('.dropdown-toggle');



toggle.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".images");
  if (!container) return;

  const savedImages = JSON.parse(localStorage.getItem("images")) || [];

  container.innerHTML = "";

  savedImages.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.style.width = "200px";
    img.style.margin = "10px";
    container.appendChild(img);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const loading = document.querySelector(".loading");

  if (loading) {
    setTimeout(() => {
      loading.classList.add("loading-hidden");
    }, 600);
  }
});



const burger = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileDrop = document.querySelector(".mobile-drop");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("d-none");
});
