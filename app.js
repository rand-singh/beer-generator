const startBtn = document.querySelector(".beer-button");
const randomBeer = document.querySelector(".random-beer");
const descriptionDisplay = document.querySelector(".description");

const getData = (e) => {
  e.preventDefault();
  fetch("https://api.punkapi.com/v2/beers/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const name = data[0].name;
      const description = data[0].description;
      const { unit, value } = data[0].volume;

      randomBeer.innerHTML = name + " " + value + " " + unit;
      descriptionDisplay.innerHTML = description;
    });
};

startBtn.addEventListener("click", getData);
