Array
    .from(document.querySelectorAll("a"))
    .filter(n => n.dataset["mrfLink"] === "https://as.com/noticias/futbol-femenino/")
    .map(n => n.closest("article"))
    .forEach(n => n.remove())