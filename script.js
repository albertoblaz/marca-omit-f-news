const asURL = "https://as.com/noticias/futbol/femenino/"
const marcaURL = "https://www.marca.com/futbol/futbol-femenino/"

window.addEventListener("load", (event) => {
  Array
    .from(document.querySelectorAll("a"))
    .filter(n => {
      const link = n.dataset["mrfLink"];
      return link && (link.startsWith(asURL) || link.startsWith(marcaURL))
    })
    .map(n => n.closest("article"))
    .forEach(n => n.remove())
});
