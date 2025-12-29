const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slider-dots');

let index = 0;

/* dots */
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);

  dot.addEventListener('click', () => {
    index = i;
    update();
  });
});

const dots = document.querySelectorAll('.slider-dots span');

function update() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');
}

setInterval(() => {
  index = (index + 1) % slides.length;
  update();
}, 4500);



////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq').forEach(faq => {
    const items = faq.querySelectorAll('.faq__item');

    items.forEach(item => {
      item.querySelector('.faq__header')
        .addEventListener('click', () => {
          items.forEach(el => {
            if (el !== item) el.classList.remove('active');
          });
          item.classList.toggle('active');
        });
    });
  });
});


///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
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


const restaurantWrap = document.getElementById("meal-restaurants");
const dishWrap = document.getElementById("meal-dishes");


function imageFallback(img) {
  img.src = IMAGES.fallback;
}


function renderRestaurants() {
  restaurantWrap.innerHTML = "";

  restaurants.forEach((r, i) => {
    restaurantWrap.insertAdjacentHTML("beforeend", `
      <div class="meal__restaurant" data-index="${i}">
        <img src="${r.img}" onerror="imageFallback(this)">
        
        <div class="meal__restaurant-body">
          <span class="meal__tag meal__tag--${r.tag}">${r.tag}</span>
          <div class="meal__restaurant-name">${r.name}</div>
          <div class="meal__restaurant-info">
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
      <div class="meal__dish" data-index="${i}">
        <div class="meal__dish-like">♡</div>
        <img src="${d.img}" onerror="imageFallback(this)">
        <span class="meal__tag meal__tag--${d.tag}">${d.tag}</span>
        <div class="meal__name">${d.name}</div>
        <div class="meal__info">
          <span>${d.time}</span>
          <span>★ ${d.rate}</span>
        </div>
        <div class="meal__dish-footer">
          <div class="meal__dish-price">$<span>${d.price.toFixed(2)}</span></div>
          <div class="meal__dish-add">+</div>
        </div>
      </div>
    `);
  });
}


restaurantWrap.addEventListener("click", (e) => {
  if (e.target.classList.contains("meal__restaurant-save")) {
    const card = e.target.closest(".meal__restaurant");
    const i = card.dataset.index;

    restaurants[i].saved = !restaurants[i].saved;

    e.target.classList.toggle("active", restaurants[i].saved);
    e.target.textContent = restaurants[i].saved ? "★" : "☆";
  }
});


dishWrap.addEventListener("click", (e) => {
  const card = e.target.closest(".meal__dish");
  const i = card?.dataset.index;

  if (e.target.classList.contains("meal__dish-like")) {
    e.target.classList.toggle("active");
    e.target.textContent = e.target.classList.contains("active") ? "♥" : "♡";
  }

  if (e.target.classList.contains("meal__dish-add") && i !== undefined) {
    dishes[i].price *= 2;
    card.querySelector(".meal__dish-price span").textContent = dishes[i].price.toFixed(2);
  }
});


renderRestaurants();
renderDishes();





