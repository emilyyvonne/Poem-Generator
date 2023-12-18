let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);

function generatePoem(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#user-input");
  let apiKey = "d3ab758b0c38d3da48da0519t5fdocd3";
  let prompt = `user input: generate a poem about ${inputElement.value}`;
  let context =
    "you are a children's poem expert and you love to write short and simple poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user input for the subject";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}
function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
  });
}
