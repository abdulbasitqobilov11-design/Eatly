// iframe map static bo‘ladi
// bu yerda faqat UI holatini o‘zgartirasan

const statusBtn = document.querySelector(".status");

statusBtn.addEventListener("click", () => {
  statusBtn.textContent = "On the way";
  statusBtn.style.background = "#2ecc71";
});



//////////////////////////////keyingi section//////////////////////////////////////////
const cartItemsEl = document.getElementById("cartItems");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");

const DELIVERY = 3.59;

const cart = [
  { title: "Chicken Hell", price: 12.99, qty: 3, img: "../assets/images/home/lasos-logo.png" },
  { title: "Chicken Hell", price: 19.99, qty: 1, img: "../assets/images/home/chicken-logo.png" }
];

function renderCart() {
  cartItemsEl.innerHTML = "";
  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.img}">
      <div class="cart-info">
        <h4>${item.title}</h4>
        <span>$${item.price.toFixed(2)}</span>
      </div>

      <div class="counter">
        <button class="minus">-</button>
        <span>${item.qty.toString().padStart(2, "0")}</span>
        <button class="plus">+</button>
      </div>

      <div class="item-price">$${(item.price * item.qty).toFixed(2)}</div>
    `;

    div.querySelector(".plus").onclick = () => {
      item.qty++;
      renderCart();
    };

    div.querySelector(".minus").onclick = () => {
      if (item.qty > 1) item.qty--;
      renderCart();
    };

    cartItemsEl.appendChild(div);
  });

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  totalEl.textContent = `$${(subtotal + DELIVERY).toFixed(2)}`;
}

renderCart();
const applyBtn = document.getElementById("applyCoupon");
const couponInput = document.getElementById("couponInput");

applyBtn.onclick = () => {
  if (couponInput.value.trim() === "") {
    alert("Enter coupon code");
    return;
  }

  alert(`Coupon "${couponInput.value}" applied`);
};
const payBtn = document.getElementById("payBtn");

payBtn.onclick = () => {
  alert("Redirecting to payment...");
  // keyin:
  // window.location.href = "payment.html";
};
