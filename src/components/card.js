import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.

  const card = document.createElement("div");
  const headLine = document.createElement("div");
  const author = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const span = document.createElement("span");

  headLine.textContent = article.headline;
  author.textContent = article.author;
  image.src = article.authorPhoto;
  span.textContent = article.authorName;

  card.classList.add("card");
  headLine.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");

  card.appendChild(headLine);
  card.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(image);
  author.appendChild(span);

  card.addEventListener("click", (event) => {
    console.log(headLine.textContent);
    event.stopPropagation();
  });

  return card;
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const entryPoint = document.querySelector(selector);

  axios
    .get(`https://lambda-times-api.herokuapp.com/articles`)
    .then((res) => {
      const itemsBootstrap = res.data.articles.bootstrap;
      const itemsJS = res.data.articles.javascript;
      const itemsJQ = res.data.articles.jquery;
      const itemsNode = res.data.articles.node;
      const itemsTech = res.data.articles.technology;

      //created a function that loops through all of the languages without having to make a forEach for each variable
      function articleItems(languages) {
        languages.forEach((language) => {
          entryPoint.appendChild(Card(language));
        });
      }

      //created a forEach to log articleItems() once instead of 5 times with each different item inside of articleItems()
      const languages = [
        itemsBootstrap,
        itemsJS,
        itemsJQ,
        itemsNode,
        itemsTech,
      ];

      languages.forEach((language) => {
        articleItems(language);
      });
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("Done"));
};

export { Card, cardAppender };
