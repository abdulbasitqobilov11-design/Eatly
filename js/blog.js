const articlesData = [
    {
      image: "./assets/images/blog/Naqsh-1.png",
      title: "How To Order Food ?",
      authorImg: "./assets/images/blog/Natasha.png",
      authorName: "Perperzon",
      date: "15 DEC, 2022",
    },
    {
      image: "./assets/images/blog/Naqsh-2.png",
      title: "How To Track The Order ?",
      authorImg: "./assets/images/blog/Natasha.png",
      authorName: "Perperzon",
      date: "15 DEC, 2022",
    },
    {
      image: "./assets/images/blog/Naqsh-3.png",
      title: "How To Manage Cards ?",
      authorImg: "./assets/images/blog/Natasha.png",
      authorName: "Perperzon",
      date: "15 DEC, 2022",
    },
    {
      image: "./assets/images/blog/Naqsh-4.png",
      title: "Tips & Tricks For Business",
      authorImg: "./assets/images/blog/Natasha.png",
      authorName: "Perperzon",
      date: "15 DEC, 2022",
    },
    {
      image: "./assets/images/blog/Naqsh-5.png",
      title: "How To Control Money ?",
      authorImg: "./assets/images/blog/Natasha.png",
      authorName: "Perperzon",
      date: "15 DEC, 2022",
    },
    {
      image: "./assets/images/blog/Naqsh-6.png",
      title: "Top 5 Business Ideas",
      authorImg: "./assets/images/blog/Natasha.png",
      authorName: "Perperzon",
      date: "15 DEC, 2022",
    },
  ];

  const articlesGrid = document.getElementById("articlesGrid");

  articlesData.forEach(item => {
    articlesGrid.innerHTML += `
      <article class="article-card">
        <div class="article-card__image">
          <img src="${item.image}" alt="">
        </div>
        <h3>${item.title}</h3>
        <div class="article-card__footer">
          <div class="author">
            <img src="${item.authorImg}" alt="">
            <span>${item.authorName}</span>
          </div>
          <time>${item.date}</time>
        </div>
      </article>
    `;
  });



  