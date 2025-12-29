const cardsEl = document.getElementById("cards");

const data = [
  { title: "Chicken Hell", time: "24min", rate: 4.8, price: 12.99, tag: "Healthy", img: "../assets/images/home/lasos.png" },
  { title: "Swe Dish", time: "34min", rate: 4.9, price: 19.99, tag: "Trending", img: "../assets/images/home/tovuq.png" },
  { title: "Swe Dish", time: "34min", rate: 4.9, price: 19.99, tag: "Supreme", img: "../assets/images/home/lasos-salat.png" },
  { title: "Chicken Hell", time: "24min", rate: 4.8, price: 12.99, tag: "Healthy", img: "../assets/images/home/lasos.png" },
  { title: "Swe Dish", time: "34min", rate: 4.9, price: 19.99, tag: "Trending", img: "../assets/images/home/tovuq.png" },
  { title: "Chicken Hell", time: "24min", rate: 4.8, price: 12.99, tag: "Healthy", img: "../assets/images/home/lasos.png" },
  { title: "Swe Dish", time: "34min", rate: 4.9, price: 19.99, tag: "Trending", img: "../assets/images/home/tovuq.png" }
];

data.map(item => {
  let currentPrice = item.price;

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card__like">
      <img src="../assets/images/home-2/like.png">
    </div>

    <div class="card__image">
      <img src="${item.img}">
    </div>

    <span class="tag">${item.tag}</span>
    <h4>${item.title}</h4>

    <div class="meta">
      <span>${item.time}</span>
      <span>⭐ ${item.rate}</span>
    </div>

    <div class="card__bottom">
      <span class="price">$<span class="price-value">${currentPrice.toFixed(2)}</span></span>
      <button class="plus">+</button>
    </div>
  `;

  card.querySelector(".plus").onclick = () => {
    currentPrice *= 2;
    card.querySelector(".price-value").textContent = currentPrice.toFixed(2);
  };

  cardsEl.appendChild(card);
});
