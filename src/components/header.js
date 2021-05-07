const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  const header = document.createElement("div");
  const spanDate = document.createElement("span");
  const titleH1 = document.createElement("h1");
  const spanTemp = document.createElement("span");

  spanDate.textContent = date;
  titleH1.textContent = title;
  spanTemp.textContent = temp;
  header.classList.add("header");
  spanDate.classList.add("date");
  //Header.titleH1.classList.add(selector);
  spanTemp.classList.add("temp");

  header.appendChild(spanDate);
  header.appendChild(titleH1);
  header.appendChild(spanTemp);

  return header;

  //entryPoint.appendChild(header);
  //
  //console.log(header);
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
};

//console.log(Header("title", "1-1-21", "90"));

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const entryPoint = document.querySelector(selector);

  entryPoint.appendChild(Header("Las Vegas Times", "5-7-21", "90 Degrees"));
};

export { Header, headerAppender };
