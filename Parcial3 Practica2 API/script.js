const listaPokemon = document.querySelector("#listaPokemon");

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim().toLowerCase();
  buscarPokemonPorNombre(searchTerm);
});

let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}

function buscarPokemonPorNombre(nombre) {

  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.species) {

        listaPokemon.innerHTML = "";

        mostrarPokemon(data);
      } else {

        console.log("No se encontró el Pokémon.");
      }
    })
    .catch((error) => {

      console.log("Ocurrió un error:", error);
    });
}


function mostrarPokemon(poke) {

    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }


    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p>
                <p class="stat">${poke.weight}kg</p>
                
            </div>
        </div>
    `;
    div.addEventListener("click", () => {
        mostrarModal(poke);
      });
    listaPokemon.append(div);
}

function mostrarModal(poke) {

    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");
  
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
  
   
    const tipos = poke.types
      .map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`)
      .join('');
  
    const pokeId = poke.id.toString().padStart(3, "0");
  
    modalContent.innerHTML = `
      <p class="pokemon-id-back">#${pokeId}</p>
      <div class="pokemon-imagen">
        <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
      </div>
      <div class="pokemon-info">
        <div class="nombre-contenedor">
          <p class="pokemon-id">#${pokeId}</p>
          <h2 class="pokemon-nombre">${poke.name}</h2>
        </div>
        <div class="pokemon-tipos">
          ${tipos}
        </div>
        <div class="pokemon-stats">
          <p class="stat">${poke.height}m</p>
          <p class="stat">${poke.weight}kg</p>
        </div>
      </div>
    `;
  
  
    document.body.appendChild(modalOverlay);
    modalOverlay.appendChild(modalContent);
 
    modalOverlay.addEventListener("click", () => {
      document.body.removeChild(modalOverlay);
    });
  }
  
  const logoImg = document.querySelector("#logoImg");

  logoImg.addEventListener("click", () => {

    searchInput.value = "";
    listaPokemon.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
      fetch(URL + i)
        .then((response) => response.json())
        .then((data) => mostrarPokemon(data));
    }
  });