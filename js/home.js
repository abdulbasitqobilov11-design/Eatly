
const IMAGES = {
  restaurants: {
    r1: "./assets/images/home/chicken.png",
    r2: "./assets/images/home/burger.png",
    r3: "./assets/images/home/chicken.png"
  },
  dishes: {
    d1: "./assets/images/home/lasos.png",
    d2: "./assets/images/home/tovuq.png",
    d3: "./assets/images/home/lasos-salat.png",
    d4: "./assets/images/home/lasos.png",
    d5: "./assets/images/home/tovuq.png"
  },
  fallback: "img/fallback.png"
};


const restaurants = [
  { name: "The Chicken King", tag: "healthy", time: "24min", rate: "4.8", img: IMAGES.restaurants.r1, saved: false },
  { name: "The Burger King", tag: "trending", time: "24min", rate: "4.9", img: IMAGES.restaurants.r2, saved: false },
  { name: "The Chicken King", tag: "healthy", time: "24min", rate: "4.8", img: IMAGES.restaurants.r3, saved: false }
];

const dishes = [
  { name: "Chicken Hell", tag: "healthy", price: 12.99, time: "24min", rate: "4.8", img: IMAGES.dishes.d1 },
  { name: "Swe Dish", tag: "trending", price: 19.99, time: "34min", rate: "4.9", img: IMAGES.dishes.d2 },
  { name: "Swe Dish", tag: "supreme", price: 19.99, time: "34min", rate: "4.9", img: IMAGES.dishes.d3 },
  { name: "Chicken Hell", tag: "healthy", price: 12.99, time: "24min", rate: "4.8", img: IMAGES.dishes.d4 },
  { name: "Swe Dish", tag: "trending", price: 19.99, time: "34min", rate: "4.9", img: IMAGES.dishes.d5 }
];


const restaurantWrap = document.getElementById("restaurants");
const dishWrap = document.getElementById("dishes");





function renderRestaurants() {
  restaurantWrap.innerHTML = "";

  restaurants.forEach((r, i) => {
    restaurantWrap.insertAdjacentHTML("beforeend", `
      <div class="food__restaurant" data-index="${i}">
        <img src="${r.img}" onerror="imageFallback(this)">
        <div class="food__restaurant-save ${r.saved ? "active" : ""}">
          ${r.saved ? "★" : "☆"}
        </div>
        <div class="food__restaurant-body">
          <span class="food__tag food__tag--${r.tag}">${r.tag}</span>
          <div class="food__restaurant-name">${r.name}</div>
          <div class="food__restaurant-info">
            <span>${r.time}</span>
            <span>★ ${r.rate}</span>
          </div>
        </div>
      </div>
    `);
  });
}


function renderDishes() {
  dishWrap.innerHTML = "";

  dishes.forEach((d, i) => {
    dishWrap.insertAdjacentHTML("beforeend", `
      <div class="food__dish" data-index="${i}">
        <div class="food__dish-like">♡</div>
        <img src="${d.img}" onerror="imageFallback(this)">
        <span class="food__tag food__tag--${d.tag}">${d.tag}</span>
        <div class="food__name">${d.name}</div>
        <div class="food__info">
          <span>${d.time}</span>
          <span>★ ${d.rate}</span>
        </div>
        <div class="food__dish-footer">
          <div class="food__dish-price">$<span>${d.price.toFixed(2)}</span></div>
          <div class="food__dish-add">+</div>
        </div>
      </div>
    `);
  });
}



restaurantWrap.addEventListener("click", (e) => {
  if (e.target.classList.contains("food__restaurant-save")) {
    const card = e.target.closest(".food__restaurant");
    const i = card.dataset.index;

    restaurants[i].saved = !restaurants[i].saved;


    e.target.classList.toggle("active", restaurants[i].saved);
    e.target.textContent = restaurants[i].saved ? "★" : "☆";
  }
});


dishWrap.addEventListener("click", (e) => {
  const card = e.target.closest(".food__dish");
  const i = card?.dataset.index;

  if (e.target.classList.contains("food__dish-like")) {
    e.target.classList.toggle("active");
    e.target.textContent = e.target.classList.contains("active") ? "♥" : "♡";
  }

  if (e.target.classList.contains("food__dish-add") && i !== undefined) {
    dishes[i].price *= 2;
    card.querySelector(".food__dish-price span").textContent = dishes[i].price.toFixed(2);
  }
});


renderRestaurants();
renderDishes();
//songidan 1ta oldingi section 
document.addEventListener("DOMContentLoaded", function () {
  const r = (a,b)=>Math.floor(Math.random()*(b-a+1))+a;

 
  document.querySelector(".voucher-price").textContent = "$"+r(20,150)+".00";

  document.querySelector(".expense-text").textContent = "Increased By "+r(5,20)+"%";
  document.querySelector(".voucher-text").textContent = "Increased By "+r(2,12)+"%";

  document.querySelector(".expense-bar").style.width = r(55,90)+"%";
  document.querySelector(".voucher-bar").style.width = r(25,70)+"%";
});

//songi section








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
const ordersBox = document.querySelector(".proDash__orders");
ordersBox.innerHTML = "";

orders
  .sort(() => Math.random() - 0.5)
  .slice(0, 3)
  .forEach(o => {
    ordersBox.innerHTML += `
      <div class="proDash__order">
        <div class="proDash__orderImg">
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
const statsBox = document.querySelector(".proDash__stats");
statsBox.innerHTML = "";

stats.forEach(s => {
  const percent = Math.floor(Math.random() * 40) + 50;
  const price = (Math.random() * 500 + 50).toFixed(2);

  statsBox.innerHTML += `
    <div class="proDash__stat">
      <div class="proDash__statTop">
        <div class="proDash__icon">
          <img src="${s.icon}">
        </div>
        <div class="proDash__statText">
          <h4>${s.title}</h4>
          <small>${s.sub}</small>
        </div>
        <span class="proDash__price">$${price}</span>
      </div>
      <div class="proDash__bar">
        <div class="proDash__fill" style="width:${percent}%; background:${s.color}"></div>
      </div>
    </div>
  `;
});







/////////////////////////////////////section 2 //////////////////////////////////////////////
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


