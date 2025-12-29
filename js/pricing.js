const modal = document.getElementById("modal");
const title = document.getElementById("modalTitle");
const confirmBtn = document.getElementById("confirmBtn");
const success = document.querySelector(".success");

document.querySelectorAll(".btn").forEach(btn => {
  btn.onclick = () => {
    title.innerText = `Buy ${btn.dataset.plan} Plan`;
    modal.classList.add("active");
    success.style.display = "none";
    confirmBtn.innerText = "Confirm";
    confirmBtn.disabled = false;
  };
});

document.querySelector(".close").onclick = () => {
  modal.classList.remove("active");
};

confirmBtn.onclick = () => {
  confirmBtn.innerText = "Processing...";
  confirmBtn.disabled = true;

  setTimeout(() => {
    success.style.display = "block";
    confirmBtn.innerText = "Done";
    setTimeout(() => modal.classList.remove("active"), 1200);
  }, 1500);
};





const orders = [
  { name: "Chicken Hell", status: "On The Way", img: "../assets/images/home/lasos-logo.png" },
  { name: "Swe Dish", status: "Delivered", img: "../assets/images/home/chicken-logo.png" },
  { name: "Fish Hell Veg", status: "Cancelled", img: "../assets/images/home/salat-logo.png" },
  { name: "Burger Pro", status: "On The Way", img: "../assets/images/home/lasos-logo.png" }
];

const stats = [
  {
    title: "Expense",
    sub: "Increased By 10%",
    color: "#7c3aed",
    icon: "../assets/images/home/wallet.png"
  },
  {
    title: "Voucher Usage",
    sub: "Increased By 5%",
    color: "#f59e0b",
    icon: "../assets/images/home/money.png"
  }
];

/* ORDERS */
const ordersBox = document.querySelector(".qx9-orders");
ordersBox.innerHTML = "";

orders
  .sort(() => Math.random() - 0.5)
  .slice(0, 3)
  .forEach(o => {
    ordersBox.innerHTML += `
      <div class="qx9-order">
        <div class="qx9-orderImg">
          <img src="${o.img}">
        </div>
        <div>
          <h4>${o.name}</h4>
          <p>${o.status}</p>
        </div>
      </div>
    `;
  });

/* STATS */
const statsBox = document.querySelector(".qx9-stats");
statsBox.innerHTML = "";

stats.forEach(s => {
  const percent = Math.floor(Math.random() * 40) + 50;
  const price = (Math.random() * 500 + 50).toFixed(2);

  statsBox.innerHTML += `
    <div class="qx9-stat">
      <div class="qx9-statTop">
        <div class="qx9-icon">
          <img src="${s.icon}">
        </div>
        <div class="qx9-statText">
          <h4>${s.title}</h4>
          <small>${s.sub}</small>
        </div>
        <span class="qx9-price">$${price}</span>
      </div>
      <div class="qx9-bar">
        <div class="qx9-fill" style="width:${percent}%; background:${s.color}"></div>
      </div>
    </div>
  `;
});
const track = document.querySelector(".csay__track");
const cards = document.querySelectorAll(".csay__card");
const pagination = document.querySelector(".csay__pagination");

let index = 0;
let perView = getPerView();

function getPerView() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

function createPagination() {
  pagination.innerHTML = "";
  const pages = Math.ceil(cards.length / perView);

  for (let i = 0; i < pages; i++) {
    const btn = document.createElement("button");
    if (i === 0) btn.classList.add("active");

    btn.addEventListener("click", () => {
      index = i;
      updateCarousel();
    });

    pagination.appendChild(btn);
  }
}

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 24;
  track.style.transform = `translateX(-${index * cardWidth * perView}px)`;

  [...pagination.children].forEach((b, i) =>
    b.classList.toggle("active", i === index)
  );
}

window.addEventListener("resize", () => {
  perView = getPerView();
  index = 0;
  createPagination();
  updateCarousel();
});

createPagination();
updateCarousel();