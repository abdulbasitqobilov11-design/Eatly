const u9Slides = document.querySelectorAll(".u9-auth-slide");
const u9Dots = document.querySelectorAll(".u9-auth-dot");

let u9Index = 0;

setInterval(() => {
  u9Slides[u9Index].classList.remove("is-active");
  u9Dots[u9Index].classList.remove("is-active");

  u9Index = (u9Index + 1) % u9Slides.length;

  u9Slides[u9Index].classList.add("is-active");
  u9Dots[u9Index].classList.add("is-active");
}, 3500);
