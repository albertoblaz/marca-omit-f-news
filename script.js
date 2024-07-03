window.addEventListener("load", (event) => {
  Array
    .from(document.querySelectorAll("a"))
    .filter(n =>
      n.dataset["mrfLink"].startsWith("https://as.com/noticias/futbol/femenino/") ||
      n.dataset["mrfLink"].startsWith("https://www.marca.com/futbol/futbol-femenino/")
    )
    .map(n => n.closest("article"))
    .forEach(n => n.remove())
});
