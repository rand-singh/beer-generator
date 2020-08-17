fetch("https://api.punkapi.com/v2/beers/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    const name = data[0].name;
    const description = data[0].description;
    const { unit, value } = data[0].volume;
  });
