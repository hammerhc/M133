var article = [];

function load() {
  document.querySelector("#buttonNumber").addEventListener(
    "click",
    getArticle,
  );

  document.querySelector("#buttonUpdate").addEventListener(
    "click",
    updateArticle,
  );
}

function getArticle() {
  var index = document.querySelector("#inputNumber").value;

  if (index > 0) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + index)
      .then((response) => response.json())
      .then((json) => loadArticle(json))
      .catch((error) => console.error(error));
  } else {
    alert("Please enter an Article greater than 0!");
  }
}

function loadArticle(json) {
  article = json;
  var articleContainer = document.querySelector("#articles");
  var articleTextarea = document.querySelector("#textareaArticle");
  articleContainer.innerHTML = "<h1>" + article.title + "</h1><article>" +
    article.body + "</article>";
  articleTextarea.value = article.body;
}

function updateArticle() {
  if (article.body.length > 0) {
    article.body = document.querySelector("#textareaArticle").value;
    fetch("https://jsonplaceholder.typicode.com/posts/" + article.id, {
      method: "PUT",
      body: JSON.stringify(article),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => loadArticle(json))
      .catch((error) => console.error(error));
  } else {
    alert("Please load an article!");
  }
}
