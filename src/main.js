import pokemon from './data/pokemon/pokemon.js';
import  data from './data.js'

//console.log(pokemon);

//for (var i = 0; i < pokemon.length; i++) { //Recorrer todos los arrays y que no los muestre
  //console.log(pokemon[i])
//}
//Contenedores de la lista de todos los pokémon
const displayPokemon = document.createElement("div");
displayPokemon.className = "displayPokemon";
document.body.appendChild(displayPokemon);

  const cardsContainer = document.getElementById('root');
  cardsContainer.className = "cardsContainer";
  displayPokemon.appendChild(cardsContainer);

pokemon.forEach(data => {

  //console.log(data);
  //Aquí las tarjetas de todos los pokémon
let pokemonCard = document.createElement("div");
pokemonCard.className = "pokemonCard";
cardsContainer.appendChild(pokemonCard);

  let imageContainer = document.createElement("div");
  imageContainer.className = "imageContainer";
  pokemonCard.appendChild(imageContainer);

    let cardImage = document.createElement("img");
    cardImage.className = "cardImage";
    cardImage.src = data.img;
    imageContainer.appendChild(cardImage);

  let cardNumber = document.createElement("div");
  cardNumber.className = "cardNumber";
  cardNumber.textContent = ("No. " + data.num);
  pokemonCard.appendChild(cardNumber);

  let cardName = document.createElement("div");
  cardName.className = "cardName";
  cardName.textContent = data.name;
  pokemonCard.appendChild(cardName);

//Aquí la tarjeta con el perfil de cada pokémon
//Contenedor del perfil de cada pokémon
const profileContainer = document.createElement("div");
profileContainer.className = "profileContainer";
profileContainer.id = "profileContainer";
document.body.appendChild(profileContainer);

let profileCard = document.createElement("div");
profileCard.className = "profileCard";
profileContainer.appendChild(profileCard);

  let profileCardLeft = document.createElement("div");
  profileCardLeft.className = "profileCardLeft";
  profileCard.appendChild(profileCardLeft);

    let profileName = document.createElement("div");
    profileName.className = "profileName";
    profileName.textContent = data.name;
    profileCardLeft.appendChild(profileName);

    let profileNumber = document.createElement("div");
    profileNumber.className = "profileNumber";
    profileNumber.textContent = ("No. " + data.num);
    profileCardLeft.appendChild(profileNumber);

    let profileImageContainer = document.createElement("div");
    profileImageContainer.className = "profileImageContainer";
    profileCardLeft.appendChild(profileImageContainer);

      let profileImage = document.createElement("img");
      profileImage.className = "profileImage";
      profileImage.src = data.img;
      profileImageContainer.appendChild(profileImage);

  let profileCardRight = document.createElement("div");
  profileCardRight.className = "profileCardRight";
  profileCard.appendChild(profileCardRight);

    let closeButton = document.createElement("div");
    closeButton.className = "closeButton";
    profileCardRight.appendChild(closeButton);

    let close = document.createElement('a')
    close.className = 'btn-cerrar-popup'
    closeButton.appendChild(close)
    let icon = document.createElement('i')
    icon.className = "far fa-times-circle"
    close.appendChild(icon)

    let profileEgg = document.createElement("div");
    profileEgg.className = "profileEgg";
    profileEgg.textContent = ("Huevo: " + data.egg);
    profileCardRight.appendChild(profileEgg);

    let profileCandyCount = document.createElement("div");
    profileCandyCount.className = "profileCandyCount";
    profileCandyCount.textContent = ("Dulces: " + data.candy_count);
    profileCardRight.appendChild(profileCandyCount);

    let spawnChanceTitle = document.createElement("div");
    spawnChanceTitle.className = "spawnChanceTitle";
    spawnChanceTitle.textContent = "Probabilidad de encontrarlo:";
    profileCardRight.appendChild(spawnChanceTitle);

      let profileSpawnChance = document.createElement("div");
      profileSpawnChance.className = "profileSpawnChance";
      profileSpawnChance.textContent = data.spawn_chance;
      profileCardRight.appendChild(profileSpawnChance);

    let typeTitle = document.createElement("div");
    typeTitle.className = "typeTitle";
    typeTitle.textContent = "Tipo:";
    profileCardRight.appendChild(typeTitle);

      let profileType = document.createElement("div");
      profileType.className = "profileType";
      profileType.textContent = data.type;
      profileCardRight.appendChild(profileType);

    let weaknessesTitle = document.createElement("div");
    weaknessesTitle.className = "weaknessesTitle";
    weaknessesTitle.textContent = "Debilidades:";
    profileCardRight.appendChild(weaknessesTitle);

      let profileWeaknesses = document.createElement("div");
      profileWeaknesses.className = "profileWeaknesses";
      profileWeaknesses.textContent = data.weaknesses;
      profileCardRight.appendChild(profileWeaknesses);

      //CREANDO EVENTO ABRIR POPUP
      let eventImag = document.getElementsByClassName('cardImage')
      let eventImages = eventImag[eventImag.length-1];
      //console.log(eventImages);
      eventImages.addEventListener('click',abrirPopup)
      let overlay = document.querySelector('#profileContainer')//el id lo tiene el overlay
      let popup =  document.getElementsByClassName('profileCard')
      let newPopup = popup[popup.length-1];
      //console.log(newPopup);
      let btnClosePopup = document.getElementsByClassName('btn-cerrar-popup')
      let newBtnClose = btnClosePopup[btnClosePopup.length-1];
      newBtnClose.addEventListener('click', cerrarPopup)


      function abrirPopup(){

           overlay.classList.add('active')
           newPopup.classList.add('active')


           }
       function cerrarPopup(){
          overlay.classList.remove('active')
          newPopup.classList.remove('active')


           }
})


let searchNumber = 0


let save = document.querySelector('#enterNumber')
save.addEventListener('click', saveNumber)

function saveNumber(){
  limpiar()
  searchNumber = parseInt(document.getElementById('number').value)
  let numberResult = data.saveNumber(searchNumber)
  console.log(numberResult);

  //Aquí las tarjetas de todos los pokémon
let pokemonCard = document.createElement("div");
pokemonCard.className = "pokemonCard";
cardsContainer.appendChild(pokemonCard);

  let imageContainer = document.createElement("div");
  imageContainer.className = "imageContainer";
  pokemonCard.appendChild(imageContainer);

    let cardImage = document.createElement("img");
    cardImage.className = "cardImage";
    cardImage.src = numberResult.img;
    imageContainer.appendChild(cardImage);

  let cardNumber = document.createElement("div");
  cardNumber.className = "cardNumber";
  cardNumber.textContent = ("No. " + numberResult.num);
  pokemonCard.appendChild(cardNumber);

  let cardName = document.createElement("div");
  cardName.className = "cardName";
  cardName.textContent = numberResult.name;
  pokemonCard.appendChild(cardName);

//Aquí la tarjeta con el perfil de cada pokémon
//Contenedor del perfil de cada pokémon
const profileContainer = document.createElement("div");
profileContainer.className = "profileContainer";
profileContainer.id = "profileContainer";
document.body.appendChild(profileContainer);

let profileCard = document.createElement("div");
profileCard.className = "profileCard";
profileContainer.appendChild(profileCard);

  let profileCardLeft = document.createElement("div");
  profileCardLeft.className = "profileCardLeft";
  profileCard.appendChild(profileCardLeft);

    let profileName = document.createElement("div");
    profileName.className = "profileName";
    profileName.textContent = numberResult.name;
    profileCardLeft.appendChild(profileName);

    let profileNumber = document.createElement("div");
    profileNumber.className = "profileNumber";
    profileNumber.textContent = ("No. " + numberResult.num);
    profileCardLeft.appendChild(profileNumber);

    let profileImageContainer = document.createElement("div");
    profileImageContainer.className = "profileImageContainer";
    profileCardLeft.appendChild(profileImageContainer);

      let profileImage = document.createElement("img");
      profileImage.className = "profileImage";
      profileImage.src = numberResult.img;
      profileImageContainer.appendChild(profileImage);

  let profileCardRight = document.createElement("div");
  profileCardRight.className = "profileCardRight";
  profileCard.appendChild(profileCardRight);

    let closeButton = document.createElement("div");
    closeButton.className = "closeButton";
    profileCardRight.appendChild(closeButton);

    let close = document.createElement('a')
    close.className = 'btn-cerrar-popup'
    closeButton.appendChild(close)
    let icon = document.createElement('i')
    icon.className = "far fa-times-circle"
    close.appendChild(icon)

    let profileEgg = document.createElement("div");
    profileEgg.className = "profileEgg";
    profileEgg.textContent = ("Huevo: " + numberResult.egg);
    profileCardRight.appendChild(profileEgg);

    let profileCandyCount = document.createElement("div");
    profileCandyCount.className = "profileCandyCount";
    profileCandyCount.textContent = ("Dulces: " + numberResult.candy_count);
    profileCardRight.appendChild(profileCandyCount);

    let spawnChanceTitle = document.createElement("div");
    spawnChanceTitle.className = "spawnChanceTitle";
    spawnChanceTitle.textContent = "Probabilidad de encontrarlo:";
    profileCardRight.appendChild(spawnChanceTitle);

      let profileSpawnChance = document.createElement("div");
      profileSpawnChance.className = "profileSpawnChance";
      profileSpawnChance.textContent = numberResult.spawn_chance;
      profileCardRight.appendChild(profileSpawnChance);

    let typeTitle = document.createElement("div");
    typeTitle.className = "typeTitle";
    typeTitle.textContent = "Tipo:";
    profileCardRight.appendChild(typeTitle);

      let profileType = document.createElement("div");
      profileType.className = "profileType";
      profileType.textContent = numberResult.type;
      profileCardRight.appendChild(profileType);

    let weaknessesTitle = document.createElement("div");
    weaknessesTitle.className = "weaknessesTitle";
    weaknessesTitle.textContent = "Debilidades:";
    profileCardRight.appendChild(weaknessesTitle);

      let profileWeaknesses = document.createElement("div");
      profileWeaknesses.className = "profileWeaknesses";
      profileWeaknesses.textContent = numberResult.weaknesses;
      profileCardRight.appendChild(profileWeaknesses);

      //CREANDO EVENTO ABRIR POPUP
      let eventImag = document.getElementsByClassName('cardImage')
      let eventImages = eventImag[eventImag.length-1];
      //console.log(eventImages);
      eventImages.addEventListener('click',abrirPopup)
      let overlay = document.querySelector('#profileContainer')//el id lo tiene el overlay
      let popup =  document.getElementsByClassName('profileCard')
      let newPopup = popup[popup.length-1];
      //console.log(newPopup);
      let btnClosePopup = document.getElementsByClassName('btn-cerrar-popup')
      let newBtnClose = btnClosePopup[btnClosePopup.length-1];
      newBtnClose.addEventListener('click', cerrarPopup)


      function abrirPopup(){

           overlay.classList.add('active')
           newPopup.classList.add('active')


           }
       function cerrarPopup(){
          overlay.classList.remove('active')
          newPopup.classList.remove('active')


           }

}



let typeSelect = document.querySelector('#type')
typeSelect.addEventListener('change', showType)

function showType(){
  limpiar()
  let whatType = document.getElementById('type').value
  console.log(whatType);
  let type = data.showType(pokemon,whatType)
  console.log(type);
  type.forEach(typeElement => {
    console.log(typeElement);
     //Aquí las tarjetas de todos los pokémon
let pokemonCard = document.createElement("div");
pokemonCard.className = "pokemonCard";
cardsContainer.appendChild(pokemonCard);

  let imageContainer = document.createElement("div");
  imageContainer.className = "imageContainer";
  pokemonCard.appendChild(imageContainer);

    let cardImage = document.createElement("img");
    cardImage.className = "cardImage";
    cardImage.src = typeElement.img;
    imageContainer.appendChild(cardImage);

  let cardNumber = document.createElement("div");
  cardNumber.className = "cardNumber";
  cardNumber.textContent = ("No. " + typeElement.num);
  pokemonCard.appendChild(cardNumber);

  let cardName = document.createElement("div");
  cardName.className = "cardName";
  cardName.textContent = typeElement.name;
  pokemonCard.appendChild(cardName);

//Aquí la tarjeta con el perfil de cada pokémon
//Contenedor del perfil de cada pokémon
const profileContainer = document.createElement("div");
profileContainer.className = "profileContainer";
profileContainer.id = "profileContainer";
document.body.appendChild(profileContainer);

let profileCard = document.createElement("div");
profileCard.className = "profileCard";
profileContainer.appendChild(profileCard);

  let profileCardLeft = document.createElement("div");
  profileCardLeft.className = "profileCardLeft";
  profileCard.appendChild(profileCardLeft);

    let profileName = document.createElement("div");
    profileName.className = "profileName";
    profileName.textContent = typeElement.name;
    profileCardLeft.appendChild(profileName);

    let profileNumber = document.createElement("div");
    profileNumber.className = "profileNumber";
    profileNumber.textContent = ("No. " + typeElement.num);
    profileCardLeft.appendChild(profileNumber);

    let profileImageContainer = document.createElement("div");
    profileImageContainer.className = "profileImageContainer";
    profileCardLeft.appendChild(profileImageContainer);

      let profileImage = document.createElement("img");
      profileImage.className = "profileImage";
      profileImage.src = typeElement.img;
      profileImageContainer.appendChild(profileImage);

  let profileCardRight = document.createElement("div");
  profileCardRight.className = "profileCardRight";
  profileCard.appendChild(profileCardRight);

    let closeButton = document.createElement("div");
    closeButton.className = "closeButton";
    profileCardRight.appendChild(closeButton);

    let close = document.createElement('a')
    close.className = 'btn-cerrar-popup'
    closeButton.appendChild(close)
    let icon = document.createElement('i')
    icon.className = "far fa-times-circle"
    close.appendChild(icon)

    let profileEgg = document.createElement("div");
    profileEgg.className = "profileEgg";
    profileEgg.textContent = ("Huevo: " + typeElement.egg);
    profileCardRight.appendChild(profileEgg);

    let profileCandyCount = document.createElement("div");
    profileCandyCount.className = "profileCandyCount";
    profileCandyCount.textContent = ("Dulces: " + typeElement.candy_count);
    profileCardRight.appendChild(profileCandyCount);

    let spawnChanceTitle = document.createElement("div");
    spawnChanceTitle.className = "spawnChanceTitle";
    spawnChanceTitle.textContent = "Probabilidad de encontrarlo:";
    profileCardRight.appendChild(spawnChanceTitle);

      let profileSpawnChance = document.createElement("div");
      profileSpawnChance.className = "profileSpawnChance";
      profileSpawnChance.textContent = typeElement.spawn_chance;
      profileCardRight.appendChild(profileSpawnChance);

    let typeTitle = document.createElement("div");
    typeTitle.className = "typeTitle";
    typeTitle.textContent = "Tipo:";
    profileCardRight.appendChild(typeTitle);

      let profileType = document.createElement("div");
      profileType.className = "profileType";
      profileType.textContent = typeElement.type;
      profileCardRight.appendChild(profileType);

    let weaknessesTitle = document.createElement("div");
    weaknessesTitle.className = "weaknessesTitle";
    weaknessesTitle.textContent = "Debilidades:";
    profileCardRight.appendChild(weaknessesTitle);

      let profileWeaknesses = document.createElement("div");
      profileWeaknesses.className = "profileWeaknesses";
      profileWeaknesses.textContent = typeElement.weaknesses;
      profileCardRight.appendChild(profileWeaknesses);

      //CREANDO EVENTO ABRIR POPUP
      let eventImag = document.getElementsByClassName('cardImage')
      let eventImages = eventImag[eventImag.length-1];
      //console.log(eventImages);
      eventImages.addEventListener('click',abrirPopup)
      let overlay = document.querySelector('#profileContainer')//el id lo tiene el overlay
      let popup =  document.getElementsByClassName('profileCard')
      let newPopup = popup[popup.length-1];
      //console.log(newPopup);
      let btnClosePopup = document.getElementsByClassName('btn-cerrar-popup')
      let newBtnClose = btnClosePopup[btnClosePopup.length-1];
      newBtnClose.addEventListener('click', cerrarPopup)


      function abrirPopup(){

           overlay.classList.add('active')
           newPopup.classList.add('active')


           }
       function cerrarPopup(){
          overlay.classList.remove('active')
          newPopup.classList.remove('active')


           }
  });
}



let weaknessesSelect = document.querySelector('#weaknesses')
weaknessesSelect.addEventListener('change',showWeaknesses)

  function showWeaknesses(){
    limpiar()
    let whatWeaknesses = document.getElementById('weaknesses').value
    console.log(whatWeaknesses);
    let weaknesses = data.showWeaknesses(pokemon, whatWeaknesses)
    console.log(weaknesses);
    weaknesses.forEach(weaknessesElement =>{
      console.log(weaknessesElement);
    //Aquí las tarjetas de todos los pokémon
let pokemonCard = document.createElement("div");
pokemonCard.className = "pokemonCard";
cardsContainer.appendChild(pokemonCard);

  let imageContainer = document.createElement("div");
  imageContainer.className = "imageContainer";
  pokemonCard.appendChild(imageContainer);

    let cardImage = document.createElement("img");
    cardImage.className = "cardImage";
    cardImage.src = weaknessesElement.img;
    imageContainer.appendChild(cardImage);

  let cardNumber = document.createElement("div");
  cardNumber.className = "cardNumber";
  cardNumber.textContent = ("No. " + weaknessesElement.num);
  pokemonCard.appendChild(cardNumber);

  let cardName = document.createElement("div");
  cardName.className = "cardName";
  cardName.textContent = weaknessesElement.name;
  pokemonCard.appendChild(cardName);

  //Aquí la tarjeta con el perfil de cada pokémon
  //Contenedor del perfil de cada pokémon
  const profileContainer = document.createElement("div");
  profileContainer.className = "profileContainer";
  profileContainer.id = "profileContainer";
  document.body.appendChild(profileContainer);

let profileCard = document.createElement("div");
profileCard.className = "profileCard";
profileContainer.appendChild(profileCard);

  let profileCardLeft = document.createElement("div");
  profileCardLeft.className = "profileCardLeft";
  profileCard.appendChild(profileCardLeft);

    let profileName = document.createElement("div");
    profileName.className = "profileName";
    profileName.textContent = weaknessesElement.name;
    profileCardLeft.appendChild(profileName);

    let profileNumber = document.createElement("div");
    profileNumber.className = "profileNumber";
    profileNumber.textContent = ("No. " + weaknessesElement.num);
    profileCardLeft.appendChild(profileNumber);

    let profileImageContainer = document.createElement("div");
    profileImageContainer.className = "profileImageContainer";
    profileCardLeft.appendChild(profileImageContainer);

      let profileImage = document.createElement("img");
      profileImage.className = "profileImage";
      profileImage.src = weaknessesElement.img;
      profileImageContainer.appendChild(profileImage);

  let profileCardRight = document.createElement("div");
  profileCardRight.className = "profileCardRight";
  profileCard.appendChild(profileCardRight);

    let closeButton = document.createElement("div");
    closeButton.className = "closeButton";
    profileCardRight.appendChild(closeButton);

    let close = document.createElement('a')
    close.className = 'btn-cerrar-popup'
    closeButton.appendChild(close)
    let icon = document.createElement('i')
    icon.className = "far fa-times-circle"
    close.appendChild(icon)

    let profileEgg = document.createElement("div");
    profileEgg.className = "profileEgg";
    profileEgg.textContent = ("Huevo: " + weaknessesElement.egg);
    profileCardRight.appendChild(profileEgg);

    let profileCandyCount = document.createElement("div");
    profileCandyCount.className = "profileCandyCount";
    profileCandyCount.textContent = ("Dulces: " + weaknessesElement.candy_count);
    profileCardRight.appendChild(profileCandyCount);

    let spawnChanceTitle = document.createElement("div");
    spawnChanceTitle.className = "spawnChanceTitle";
    spawnChanceTitle.textContent = "Probabilidad de encontrarlo:";
    profileCardRight.appendChild(spawnChanceTitle);

      let profileSpawnChance = document.createElement("div");
      profileSpawnChance.className = "profileSpawnChance";
      profileSpawnChance.textContent = weaknessesElement.spawn_chance;
      profileCardRight.appendChild(profileSpawnChance);

    let typeTitle = document.createElement("div");
    typeTitle.className = "typeTitle";
    typeTitle.textContent = "Tipo:";
    profileCardRight.appendChild(typeTitle);

      let profileType = document.createElement("div");
      profileType.className = "profileType";
      profileType.textContent = weaknessesElement.type;
      profileCardRight.appendChild(profileType);

    let weaknessesTitle = document.createElement("div");
    weaknessesTitle.className = "weaknessesTitle";
    weaknessesTitle.textContent = "Debilidades:";
    profileCardRight.appendChild(weaknessesTitle);

      let profileWeaknesses = document.createElement("div");
      profileWeaknesses.className = "profileWeaknesses";
      profileWeaknesses.textContent = weaknessesElement.weaknesses;
      profileCardRight.appendChild(profileWeaknesses);

      //CREANDO EVENTO ABRIR POPUP
      let eventImag = document.getElementsByClassName('cardImage')
      let eventImages = eventImag[eventImag.length-1];
      //console.log(eventImages);
      eventImages.addEventListener('click',abrirPopup)
      let overlay = document.querySelector('#profileContainer')//el id lo tiene el overlay
      let popup =  document.getElementsByClassName('profileCard')
      let newPopup = popup[popup.length-1];
      //console.log(newPopup);
      let btnClosePopup = document.getElementsByClassName('btn-cerrar-popup')
      let newBtnClose = btnClosePopup[btnClosePopup.length-1];
      newBtnClose.addEventListener('click', cerrarPopup)


      function abrirPopup(){

           overlay.classList.add('active')
           newPopup.classList.add('active')


           }
       function cerrarPopup(){
          overlay.classList.remove('active')
          newPopup.classList.remove('active')


           }

    })

  }



let orderNum = document.querySelector('#order')
orderNum.addEventListener('change', orderNumber)

function orderNumber(){
  limpiar()
  let saveOrder = document.getElementById('order').value
  //console.log(saveOrder);
  let orderAs = data.orderNumber(pokemon, saveOrder)
  console.log(orderAs)
  orderAs.forEach(numOrderElement =>{
    console.log(numOrderElement);
     //Aquí las tarjetas de todos los pokémon
let pokemonCard = document.createElement("div");
pokemonCard.className = "pokemonCard";
cardsContainer.appendChild(pokemonCard);

  let imageContainer = document.createElement("div");
  imageContainer.className = "imageContainer";
  pokemonCard.appendChild(imageContainer);

    let cardImage = document.createElement("img");
    cardImage.className = "cardImage";
    cardImage.src = numOrderElement.img;
    imageContainer.appendChild(cardImage);

  let cardNumber = document.createElement("div");
  cardNumber.className = "cardNumber";
  cardNumber.textContent = ("No. " + numOrderElement.num);
  pokemonCard.appendChild(cardNumber);

  let cardName = document.createElement("div");
  cardName.className = "cardName";
  cardName.textContent = numOrderElement.name;
  pokemonCard.appendChild(cardName);

  //Aquí la tarjeta con el perfil de cada pokémon
  //Contenedor del perfil de cada pokémon
  const profileContainer = document.createElement("div");
  profileContainer.className = "profileContainer";
  profileContainer.id = "profileContainer";
  document.body.appendChild(profileContainer);
  
let profileCard = document.createElement("div");
profileCard.className = "profileCard";
profileContainer.appendChild(profileCard);

  let profileCardLeft = document.createElement("div");
  profileCardLeft.className = "profileCardLeft";
  profileCard.appendChild(profileCardLeft);

    let profileName = document.createElement("div");
    profileName.className = "profileName";
    profileName.textContent = numOrderElement.name;
    profileCardLeft.appendChild(profileName);

    let profileNumber = document.createElement("div");
    profileNumber.className = "profileNumber";
    profileNumber.textContent = ("No. " + numOrderElement.num);
    profileCardLeft.appendChild(profileNumber);

    let profileImageContainer = document.createElement("div");
    profileImageContainer.className = "profileImageContainer";
    profileCardLeft.appendChild(profileImageContainer);

      let profileImage = document.createElement("img");
      profileImage.className = "profileImage";
      profileImage.src = numOrderElement.img;
      profileImageContainer.appendChild(profileImage);

  let profileCardRight = document.createElement("div");
  profileCardRight.className = "profileCardRight";
  profileCard.appendChild(profileCardRight);

    let closeButton = document.createElement("div");
    closeButton.className = "closeButton";
    profileCardRight.appendChild(closeButton);

    let close = document.createElement('a')
    close.className = 'btn-cerrar-popup'
    closeButton.appendChild(close)
    let icon = document.createElement('i')
    icon.className = "far fa-times-circle"
    close.appendChild(icon)

    let profileEgg = document.createElement("div");
    profileEgg.className = "profileEgg";
    profileEgg.textContent = ("Huevo: " + numOrderElement.egg);
    profileCardRight.appendChild(profileEgg);

    let profileCandyCount = document.createElement("div");
    profileCandyCount.className = "profileCandyCount";
    profileCandyCount.textContent = ("Dulces: " + numOrderElement.candy_count);
    profileCardRight.appendChild(profileCandyCount);

    let spawnChanceTitle = document.createElement("div");
    spawnChanceTitle.className = "spawnChanceTitle";
    spawnChanceTitle.textContent = "Probabilidad de encontrarlo:";
    profileCardRight.appendChild(spawnChanceTitle);

      let profileSpawnChance = document.createElement("div");
      profileSpawnChance.className = "profileSpawnChance";
      profileSpawnChance.textContent = numOrderElement.spawn_chance;
      profileCardRight.appendChild(profileSpawnChance);

    let typeTitle = document.createElement("div");
    typeTitle.className = "typeTitle";
    typeTitle.textContent = "Tipo:";
    profileCardRight.appendChild(typeTitle);

      let profileType = document.createElement("div");
      profileType.className = "profileType";
      profileType.textContent = numOrderElement.type;
      profileCardRight.appendChild(profileType);

    let weaknessesTitle = document.createElement("div");
    weaknessesTitle.className = "weaknessesTitle";
    weaknessesTitle.textContent = "Debilidades:";
    profileCardRight.appendChild(weaknessesTitle);

      let profileWeaknesses = document.createElement("div");
      profileWeaknesses.className = "profileWeaknesses";
      profileWeaknesses.textContent = numOrderElement.weaknesses;
      profileCardRight.appendChild(profileWeaknesses);
      //CREANDO EVENTO ABRIR POPUP
      let eventImag = document.getElementsByClassName('cardImage')
      let eventImages = eventImag[eventImag.length-1];
      //console.log(eventImages);
      eventImages.addEventListener('click',abrirPopup)
      let overlay = document.querySelector('#profileContainer')//el id lo tiene el overlay
      let popup =  document.getElementsByClassName('profileCard')
      let newPopup = popup[popup.length-1];
      //console.log(newPopup);
      let btnClosePopup = document.getElementsByClassName('btn-cerrar-popup')
      let newBtnClose = btnClosePopup[btnClosePopup.length-1];
      newBtnClose.addEventListener('click', cerrarPopup)


      function abrirPopup(){

           overlay.classList.add('active')
           newPopup.classList.add('active')


           }
       function cerrarPopup(){
          overlay.classList.remove('active')
          newPopup.classList.remove('active')


           }
  })

}
function limpiar(){
  document.getElementById("root").innerHTML = ""
}




//let pokemon = ""
//fetch('./data/pokemon/pokemon.json')
//.then(res => res.json())
//.then(pokemon =>{
    //console.log(pokemon)
    //showPokemon(pokemon)


    //})
