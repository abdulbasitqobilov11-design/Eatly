const data = {
  badge: "OVER 1000 USERS",
  title1: "Enjoy Foods All",
  title2: "Over The",
  highlight: "World",
  desc:
    "Eatly help you set saving goals, earn cash back offers. Go to disclaimer for more details and get paychecks up to two days early. Get a $20 bonus.",
  buttons: ["Get Started", "Go Pro"],
  rating: "4900+",
  image:{
    src: "../assets/images/home/hero.png",
    alt: "Hero"
  },    
  logo: {
    src: "../assets/images/home/truspilot.png",      
    alt: "Trustpilot"
  }
};

const app = document.getElementById("app");

const hero = el("section", "hero");
const container = el("div", "hero__container");

const left = el("div");
left.append(
  el("span", "hero__badge", data.badge),
  title(),
  el("p", "hero__desc", data.desc),
  buttons(),
  ratingWithLogo()
);

const right = el("div", "hero__image");
const img = document.createElement("img");
img.src = data.image;

const float = el("div", "hero__float");


right.append(img, float);

container.append(left, right);
hero.append(container);
app.append(hero);

function el(tag, cls, txt) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt) e.textContent = txt;
  return e;
}

function title() {
  const h = el("h1", "hero__title");
  h.append(
    document.createTextNode(data.title1),
    document.createElement("br"),
    document.createTextNode(data.title2 + " "),
    (() => {
      const s = document.createElement("span");
      s.textContent = data.highlight;
      return s;
    })()
  );
  return h;
}

function buttons() {
  const b = el("div", "hero__buttons");
  b.append(
    el("button", "btn primary", data.buttons[0]),
    el("button", "btn outline", data.buttons[1])
  );
  return b;
}

function ratingWithLogo() {
  const wrap = el("div", "hero__rating");

  const logo = document.createElement("img");
  logo.src  = data.logo.src;
  logo.alt = data.logo.alt;

  const stars = el("span");
  stars.textContent = "⭐⭐⭐⭐⭐";

  const count = el("span");
  count.textContent = data.rating;

  wrap.append(logo, stars, count);
  return wrap;
}





const counters = document.querySelectorAll(".stats__number");

  counters.forEach(counter => {
    const target = parseFloat(counter.dataset.value);
    const suffix = counter.dataset.suffix || "";
    let current = 0;

    const duration = 1200; // ms
    const startTime = performance.now();

    function update(time) {
      const progress = Math.min((time - startTime) / duration, 1);
      current = target * progress;

      counter.textContent =
        target % 1 === 0
          ? Math.floor(current) + suffix
          : current.toFixed(2) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  });