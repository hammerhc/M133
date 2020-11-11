function load() {
  document.querySelector("#buttonNumber").addEventListener(
    "click",
    getArticle,
  );
}

function getArticle() {
  var article = document.querySelector("#inputNumber").value;

  if (article > 0) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + article)
      .then((response) => response.json())
      .then((json) => loadArticle(json))
      .catch((error) => console.error(error));
  } else {
    alert("Please enter an Article greater than 0!");
  }
}

function loadArticle(article) {
  var articleContainer = document.querySelector("#articles");
  articleContainer.innerHTML = "<h1>" + article.title + "</h1><article>" + article.body + "</article>";
}