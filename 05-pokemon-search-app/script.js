const input = document.querySelector("#search-input");
const btnSearch = document.querySelector("#search-button");
const cardContainer = document.querySelector(".card-container");

const render = (data) => {
  // name
  const nameContainer = document.querySelector(".name");
  nameContainer.innerHTML = `<p id="pokemon-name">${data.name.toUpperCase()}</p><p id="pokemon-id">#${
    data.id
  }</p>`;

  // info
  const infoContainer = document.querySelector(".info");
  infoContainer.innerHTML = `
  <p id="weight">Weight: ${data.weight}</p>
  <p id="height">Height: ${data.height}</p>`;

  // image
  const imageContainer = document.querySelector(".image-container");
  imageContainer.innerHTML = `<img src="${data.sprites.front_default}" alt="Pikachu Img" id="sprite" />`;

  // types
  const typesContainer = document.querySelector("#types");
  typesContainer.style.display = "block";
  typesContainer.innerHTML = "";
  data.types.forEach((type) => {
    const typeElement = document.createElement("span");
    typeElement.textContent = type.type.name.toUpperCase();
    typesContainer.appendChild(typeElement);
  });

  // statistics
  document.querySelector("#hp").textContent = data.stats[0].base_stat;
  document.querySelector("#attack").textContent = data.stats[1].base_stat;
  document.querySelector("#defense").textContent = data.stats[2].base_stat;
  document.querySelector("#special-attack").textContent =
    data.stats[3].base_stat;
  document.querySelector("#special-defense").textContent =
    data.stats[4].base_stat;
  document.querySelector("#speed").textContent = data.stats[5].base_stat;
};

const getData = async () => {
  const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input.value.toLowerCase()}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const submit = async (e) => {
  e.preventDefault();

  const data = await getData();

  if (!data) {
    alert("Pokémon not found");
    return;
  }

  cardContainer.style.display = "block";
  render(data);
};

btnSearch.addEventListener("click", submit);
