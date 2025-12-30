 const sidebarArticles = [
    {
      image: "./assets/images/blog/Naqsh-1.png",
      title: "How To Deposit In Depay ?",
      authorImg: "./assets/images/blog/Natasha.png",
      authorName: "Perperzon",
      date: "15 Dec, 2022",
    },
    {
      image: "./assets/images/blog/Naqsh-6.png",
      title: "Top 5 Business Ideas",
      authorImg: "./assets/images/blog/Natasha.png",
      authorName: "Perperzon",
      date: "15 Dec, 2022",
    },
    {
      image: "./assets/images/blog/Naqsh-5.png",
      title: "How To Control Money ?",
      authorImg: "./assets/images/blog/Natasha.png",
      authorName: "Perperzon",
      date: "15 Dec, 2022",
    },
  ];

  const sidebarCards = document.getElementById("sidebarCards");

  sidebarArticles.forEach(item => {
    sidebarCards.innerHTML += `
      <div class="article-card">
        <div class="article-card__image">
          <img src="${item.image}" alt="">
        </div>

        <div class="article-card__body">
          <h4 class="article-card__title">
            ${item.title}
          </h4>

          <div class="article-card__footer">
            <div class="author">
              <img src="${item.authorImg}" alt="">
              <span>${item.authorName}</span>
            </div>

            <span class="date">${item.date}</span>
          </div>
        </div>
      </div>
    `;
  });
  