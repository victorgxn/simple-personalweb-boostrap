function temaOscuro() {
  document.querySelector("body").setAttribute("data-bs-theme", "dark");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
}

function temaClaro() {
  document.querySelector("body").setAttribute("data-bs-theme", "light");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}

function cambiarTema() {
  document.querySelector("body").getAttribute("data-bs-theme") === "light" ?
    temaOscuro() : temaClaro();
}