const loading = document.querySelector(".loading");

window.addEventListener("load", () => {
  setTimeout(() => {
    loading.classList.add("loading-hidden");
  }, 2000); // 2000 ms = 2 soniya
});
