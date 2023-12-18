function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Roses are red, violets are blue",
    autoStart: true,
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);
