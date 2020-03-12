import data from './data/pokemon/pokemon.js';

//Contenedores de la lista de todos los pokémon
const displayPokemon = document.createElement("div");
displayPokemon.className = "displayPokemon";
document.body.appendChild(displayPokemon);

  const cardsContainer = document.createElement("div");
  cardsContainer.className = "cardsContainer";
  cardsContainer.id = "root";
  displayPokemon.appendChild(cardsContainer);

//Contenedor del perfil de cada pokémon
const profileContainer = document.createElement("div");
profileContainer.className = "profileContainer";
document.body.appendChild(profileContainer);

//Aquí el ciclo para obtener los datos
data.pokemon.forEach((item) => {

//Aquí las tarjetas de todos los pokémon
let pokemonCard = document.createElement("div");
pokemonCard.className = "pokemonCard";
cardsContainer.appendChild(pokemonCard);

  let imageContainer = document.createElement("div");
  imageContainer.className = "imageContainer";
  pokemonCard.appendChild(imageContainer);

    let cardImage = document.createElement("img");
    cardImage.className = "cardImage";
    cardImage.src = item.img;
    imageContainer.appendChild(cardImage);

  let cardNumber = document.createElement("div");
  cardNumber.className = "cardNumber";
  cardNumber.textContent = ("No. " + item.num);
  pokemonCard.appendChild(cardNumber);

  let cardName = document.createElement("div");
  cardName.className = "cardName";
  cardName.textContent = item.name;
  pokemonCard.appendChild(cardName);

//Aquí la tarjeta con el perfil de cada pokémon
let profileCard = document.createElement("div");
profileCard.className = "profileCard";
profileContainer.appendChild(profileCard);

  let profileCardLeft = document.createElement("div");
  profileCardLeft.className = "profileCardLeft";
  profileCard.appendChild(profileCardLeft);

    let profileName = document.createElement("div");
    profileName.className = "profileName";
    profileName.textContent = item.name;
    profileCardLeft.appendChild(profileName);

    let profileNumber = document.createElement("div");
    profileNumber.className = "profileNumber";
    profileNumber.textContent = ("No. " + item.num);
    profileCardLeft.appendChild(profileNumber);

    let profileImageContainer = document.createElement("div");
    profileImageContainer.className = "profileImageContainer";
    profileCardLeft.appendChild(profileImageContainer);

      let profileImage = document.createElement("img");
      profileImage.className = "profileImage";
      profileImage.src = item.img;
      profileImageContainer.appendChild(profileImage);

  let profileCardRight = document.createElement("div");
  profileCardRight.className = "profileCardRight";
  profileCard.appendChild(profileCardRight);

    let closeButton = document.createElement("div");
    closeButton.className = "closeButton";
    profileCardRight.appendChild(closeButton);

    let profileEgg = document.createElement("div");
    profileEgg.className = "profileEgg";
    profileEgg.textContent = ("Huevo: " + item.egg);
    profileCardRight.appendChild(profileEgg);

    let profileCandyCount = document.createElement("div");
    profileCandyCount.className = "profileCandyCount";
    profileCandyCount.textContent = ("Dulces: " + item.candy_count);
    profileCardRight.appendChild(profileCandyCount);

    let spawnChanceTitle = document.createElement("div");
    spawnChanceTitle.className = "spawnChanceTitle";
    spawnChanceTitle.textContent = "Probabilidad de encontrarlo:";
    profileCardRight.appendChild(spawnChanceTitle);

      let profileSpawnChance = document.createElement("div");
      profileSpawnChance.className = "profileSpawnChance";
      profileSpawnChance.textContent = item.spawn_chance;
      profileCardRight.appendChild(profileSpawnChance);

    let typeTitle = document.createElement("div");
    typeTitle.className = "typeTitle";
    typeTitle.textContent = "Tipo:";
    profileCardRight.appendChild(typeTitle);

      let profileType = document.createElement("div");
      profileType.className = "profileType";
      profileType.textContent = item.type;
      profileCardRight.appendChild(profileType);

    let weaknessesTitle = document.createElement("div");
    weaknessesTitle.className = "weaknessesTitle";
    weaknessesTitle.textContent = "Debilidades:";
    profileCardRight.appendChild(weaknessesTitle);

      let profileWeaknesses = document.createElement("div");
      profileWeaknesses.className = "profileWeaknesses";
      profileWeaknesses.textContent = item.weaknesses;
      profileCardRight.appendChild(profileWeaknesses);
});
