import pokemon from './data/pokemon/pokemon.js';
import data from './data.js';

 // console.log(pokemon);
 // APARECEN TODOS LOS POKEMONS AL INICIO
pokemon.forEach(data => {
  // console.log(data);
  // Aquí las tarjetas de todos los pokémon
  const pokemonCard = document.createElement('div');
  pokemonCard.className = 'pokemonCard';
  pokemonCard.innerHTML = `
    <div class="cardNumber"> No. ${data.num}</div>
    <div class="cardName">${data.name}</div>
   `;
  document.querySelector('#root').appendChild(pokemonCard);

  const imageContainer = document.createElement('div');
  imageContainer.className = 'imageContainer';
  pokemonCard.appendChild(imageContainer);

  const cardImage = document.createElement('img');
  cardImage.className = 'cardImage';
  cardImage.src = data.img;
  imageContainer.appendChild(cardImage);
  // pokemonCard += pokeCard
  // Aquí la tarjeta con el perfil de cada pokémon
  const profileContainer = document.createElement('div');
  profileContainer.className = 'profileContainer';
  profileContainer.id = 'profileContainer';
  document.body.appendChild(profileContainer);

  const profileCard = document.createElement('div');
  profileCard.className = 'profileCard';
  profileCard.innerHTML = `

  <div class="profileCardLeft">
    <div class="profileName">${data.name}</div>
    <div class="profileNumber">${data.num}</div>
    <div class="profileImageContainer">
      <img src="${data.img}" alt=""> 
    </div>
  </div>
  <div class="profileCardRight">
    <div class="profileEgg">Huevo: ${data.egg}</div>
    <div class="profileCandyCount">Dulces: ${data.candy_count}</div>
    <div class="spawnChanceTitle">Probabilidad de encontrarlo:</div>
    <div class="profileSpawnChance">${data.spawn_chance}</div>
    <div class="typeTitle">Tipo:</div>
    <div class="profileType">${data.type}</div>
    <div class="weaknessesTitle">Debilidades:</div>
    <div class="profileWeaknesses">${data.weaknesses}</div>
  </div>
  `;
  profileContainer.appendChild(profileCard);

  const closeButton = document.createElement('div');
  closeButton.className = 'closeButton';
  profileCard.appendChild(closeButton);

  const close = document.createElement('a');
  close.className = 'btn-cerrar-popup';
  closeButton.appendChild(close);
  const icon = document.createElement('i');
  icon.className = 'far fa-times-circle';
  close.appendChild(icon);


  // CREANDO EVENTO ABRIR POPUP
  const eventImag = document.querySelectorAll('.cardImage');    
  const eventImages = eventImag[eventImag.length -1];
  // console.log(eventImages);
  eventImages.addEventListener('click', abrirPopup); 
  const overlay = document.querySelector('#profileContainer');// el id lo tiene el overlay      
  const popup = document.querySelectorAll('.profileCard');
  const newPopup = popup[popup.length -1];
  // console.log(newPopup);
  const btnClosePopup = document.querySelectorAll('.btn-cerrar-popup');
  const newBtnClose = btnClosePopup[btnClosePopup.length -1];
  newBtnClose.addEventListener('click', cerrarPopup);

  function abrirPopup() {
    overlay.classList.add('active');
    newPopup.classList.add('active');
}
  function cerrarPopup() {
    overlay.classList.remove('active');
    newPopup.classList.remove('active');
    }
});

// BUSCAR POR NÚMERO
let searchNumber = 0;
const save = document.querySelector('#enterNumber');
save.addEventListener('click', saveNumber);

function saveNumber() {
  limpiar();
  searchNumber = parseInt(document.querySelector('#number').value);
  const numberResult = data.saveNumber(searchNumber);
  console.log(numberResult);
//Aquí las tarjetas de todos los pokémon
  const pokemonCard = document.createElement("div");
  pokemonCard.className = "pokemonCard";
  pokemonCard.innerHTML = `
     <div class="cardNumber"> No. ${numberResult.num}</div>
     <div class="cardName">${numberResult.name}</div>
 `;
  document.getElementById('root').appendChild(pokemonCard);
 
  const imageContainer = document.createElement("div");
  imageContainer.className = "imageContainer";
  pokemonCard.appendChild(imageContainer);
 
  const cardImage = document.createElement("img");
  cardImage.className = "cardImage";
  cardImage.src = numberResult.img;
  imageContainer.appendChild(cardImage);
  //pokemonCard += pokeCard
  //Aquí la tarjeta con el perfil de cada pokémon
  const profileContainer = document.createElement("div");
  profileContainer.className = "profileContainer";
  profileContainer.id = "profileContainer";
  document.body.appendChild(profileContainer);
 
  const profileCard = document.createElement("div");
  profileCard.className = "profileCard";
  profileCard.innerHTML = `
 
  <div class="profileCardLeft">
   <div class="profileName">${numberResult.name}</div>
   <div class="profileNumber">${numberResult.num}</div>
   <div class="profileImageContainer">
       <img src="${numberResult.img}" alt=""> 
   </div>
  </div>
  <div class="profileCardRight">
   <div class="profileEgg">Huevo: ${numberResult.egg}</div>
   <div class="profileCandyCount">Dulces: ${numberResult.candy_count}</div>
   <div class="spawnChanceTitle">Probabilidad de encontrarlo:</div>
   <div class="profileSpawnChance">${numberResult.spawn_chance}</div>
   <div class="typeTitle">Tipo:</div>
   <div class="profileType">${numberResult.type}</div>
   <div class="weaknessesTitle">Debilidades:</div>
   <div class="profileWeaknesses">${numberResult.weaknesses}</div>
  </div>
  `
  profileContainer.appendChild(profileCard);
 
  const closeButton = document.createElement("div");
  closeButton.className = "closeButton";
  profileCard.appendChild(closeButton);
 
  const close = document.createElement('a');
  close.className = 'btn-cerrar-popup';
  closeButton.appendChild(close);
  const icon = document.createElement('i')
  icon.className = "far fa-times-circle";
  close.appendChild(icon);
 
  //CREANDO EVENTO ABRIR POPUP
  let eventImag = document.querySelectorAll('.cardImage');
  let eventImages = eventImag[eventImag.length-1];
  eventImages.addEventListener('click',abrirPopup);
  let overlay = document.querySelector('#profileContainer'); //el id lo tiene el overlay
  let popup =  document.querySelectorAll('.profileCard');
  let newPopup = popup[popup.length-1];
  let btnClosePopup = document.querySelectorAll('.btn-cerrar-popup');
  let newBtnClose = btnClosePopup[btnClosePopup.length-1];
  newBtnClose.addEventListener('click', cerrarPopup);

      function abrirPopup(){
        overlay.classList.add('active');
        newPopup.classList.add('active');
        };
       function cerrarPopup(){
          overlay.classList.remove('active');
          newPopup.classList.remove('active');
           };
};


//BUSCAR POR TIPO
let typeSelect = document.querySelector('#type');
typeSelect.addEventListener('change', showType);

function showType(){
  limpiar();
  let whatType = document.querySelector('#type').value;
  //console.log(whatType);
  let type = data.showType(pokemon,whatType);
  //console.log(type);
  type.forEach(typeElement => {
    //console.log(typeElement);
     //Aquí las tarjetas de todos los pokémon
     const pokemonCard = document.createElement("div");
     pokemonCard.className = "pokemonCard";
     pokemonCard.innerHTML = `
         <div class="cardNumber"> No. ${typeElement.num}</div>
         <div class="cardName">${typeElement.name}</div>     
     `;
     document.getElementById('root').appendChild(pokemonCard);
     
     const imageContainer = document.createElement("div");
     imageContainer.className = "imageContainer";
     pokemonCard.appendChild(imageContainer);
     
     const cardImage = document.createElement("img");
     cardImage.className = "cardImage";
     cardImage.src = typeElement.img;
     imageContainer.appendChild(cardImage);   
     //Aquí la tarjeta con el perfil de cada pokémon
     const profileContainer = document.createElement("div");
     profileContainer.className = "profileContainer";
     profileContainer.id = "profileContainer";
     document.body.appendChild(profileContainer);
     
     const profileCard = document.createElement("div");
     profileCard.className = "profileCard";
     profileCard.innerHTML = `
     
     <div class="profileCardLeft">
       <div class="profileName">${typeElement.name}</div>
       <div class="profileNumber">${typeElement.num}</div>
       <div class="profileImageContainer">
           <img src="${typeElement.img}" alt=""> 
       </div>
     </div>
     <div class="profileCardRight">
       <div class="profileEgg">Huevo: ${typeElement.egg}</div>
       <div class="profileCandyCount">Dulces: ${typeElement.candy_count}</div>
       <div class="spawnChanceTitle">Probabilidad de encontrarlo:</div>
       <div class="profileSpawnChance">${typeElement.spawn_chance}</div>
       <div class="typeTitle">Tipo:</div>
       <div class="profileType">${typeElement.type}</div>
       <div class="weaknessesTitle">Debilidades:</div>
       <div class="profileWeaknesses">${typeElement.weaknesses}</div>
     </div>     
     `
     profileContainer.appendChild(profileCard);
         
     const closeButton = document.createElement("div");
     closeButton.className = "closeButton";
     profileCard.appendChild(closeButton);
     
     const close = document.createElement('a');
     close.className = 'btn-cerrar-popup';
     closeButton.appendChild(close);
     const icon = document.createElement('i')
     icon.className = "far fa-times-circle";
     close.appendChild(icon);
     
    //CREANDO EVENTO ABRIR POPUP
    let eventImag = document.querySelectorAll('.cardImage');
    let eventImages = eventImag[eventImag.length-1];
    eventImages.addEventListener('click',abrirPopup);
    let overlay = document.querySelector('#profileContainer'); //el id lo tiene el overlay
    let popup =  document.querySelectorAll('.profileCard'); 
    let newPopup = popup[popup.length-1];
    let btnClosePopup = document.querySelectorAll('.btn-cerrar-popup');
    let newBtnClose = btnClosePopup[btnClosePopup.length-1];
    newBtnClose.addEventListener('click', cerrarPopup);

      function abrirPopup(){
        overlay.classList.add('active');
        newPopup.classList.add('active');
        };
       function cerrarPopup(){
          overlay.classList.remove('active');
          newPopup.classList.remove('active');
        };
  });
};


//BUSCAR POR DEBILIDAD
let weaknessesSelect = document.querySelector('#weaknesses');
weaknessesSelect.addEventListener('change',showWeaknesses);

  function showWeaknesses(){
    limpiar();
    let whatWeaknesses = document.querySelector('#weaknesses').value;
    let weaknesses = data.showWeaknesses(pokemon, whatWeaknesses);
    weaknesses.forEach(weaknessesElement =>{
      //console.log(weaknessesElement);
    //Aquí las tarjetas de todos los pokémon
    const pokemonCard = document.createElement("div");
    pokemonCard.className = "pokemonCard";
    pokemonCard.innerHTML = `
        <div class="cardNumber"> No. ${weaknessesElement.num}</div>
        <div class="cardName">${weaknessesElement.name}</div>    
    `;
    document.getElementById('root').appendChild(pokemonCard);
    
    const imageContainer = document.createElement("div");
    imageContainer.className = "imageContainer";
    pokemonCard.appendChild(imageContainer);
    
    const cardImage = document.createElement("img");
    cardImage.className = "cardImage";
    cardImage.src = weaknessesElement.img;
    imageContainer.appendChild(cardImage);   
    //pokemonCard += pokeCard
    //Aquí la tarjeta con el perfil de cada pokémon
    const profileContainer = document.createElement("div");
    profileContainer.className = "profileContainer";
    profileContainer.id = "profileContainer";
    document.body.appendChild(profileContainer);
    
    const profileCard = document.createElement("div");
    profileCard.className = "profileCard";
    profileCard.innerHTML = `
    
    <div class="profileCardLeft">
      <div class="profileName">${weaknessesElement.name}</div>
      <div class="profileNumber">${weaknessesElement.num}</div>
      <div class="profileImageContainer">
          <img src="${weaknessesElement.img}" alt=""> 
      </div>
    </div>
    <div class="profileCardRight">
    
      <div class="profileEgg">Huevo: ${weaknessesElement.egg}</div>
      <div class="profileCandyCount">Dulces: ${weaknessesElement.candy_count}</div>
      <div class="spawnChanceTitle">Probabilidad de encontrarlo:</div>
      <div class="profileSpawnChance">${weaknessesElement.spawn_chance}</div>
      <div class="typeTitle">Tipo:</div>
      <div class="profileType">${weaknessesElement.type}</div>
      <div class="weaknessesTitle">Debilidades:</div>
      <div class="profileWeaknesses">${weaknessesElement.weaknesses}</div>
    </div>   
    `
    profileContainer.appendChild(profileCard);    
    
    const closeButton = document.createElement("div");
    closeButton.className = "closeButton";
    profileCard.appendChild(closeButton);
    
    const close = document.createElement('a');
    close.className = 'btn-cerrar-popup';
    closeButton.appendChild(close);
    const icon = document.createElement('i')
    icon.className = "far fa-times-circle";
    close.appendChild(icon);

    //CREANDO EVENTO ABRIR POPUP
    let eventImag = document.querySelectorAll('.cardImage');
    let eventImages = eventImag[eventImag.length-1];
    eventImages.addEventListener('click',abrirPopup);
    let overlay = document.querySelector('#profileContainer'); //el id lo tiene el overlay
    let popup =  document.querySelectorAll('.profileCard');
    let newPopup = popup[popup.length-1];
    let btnClosePopup = document.querySelectorAll('.btn-cerrar-popup');
    let newBtnClose = btnClosePopup[btnClosePopup.length-1];
    newBtnClose.addEventListener('click', cerrarPopup);

      function abrirPopup(){
        overlay.classList.add('active');
        newPopup.classList.add('active');
        }
       function cerrarPopup(){
          overlay.classList.remove('active');
          newPopup.classList.remove('active');
        };

    });

  };


//ORDENAR
let orderNum = document.querySelector('#order');
orderNum.addEventListener('change', orderNumber);

function orderNumber(){
  limpiar();
  let saveOrder = document.querySelector('#order').value;
  //console.log(saveOrder);
  let orderAs = data.orderNumber(pokemon, saveOrder);
  //console.log(orderAs);
  orderAs.forEach(numOrderElement =>{
    //console.log(numOrderElement);
     //Aquí las tarjetas de todos los pokémon
     const pokemonCard = document.createElement("div");
     pokemonCard.className = "pokemonCard";
     pokemonCard.innerHTML = `
         <div class="cardNumber"> No. ${numOrderElement.num}</div>
         <div class="cardName">${numOrderElement.name}</div>
     `;
     document.getElementById('root').appendChild(pokemonCard);
     
     const imageContainer = document.createElement("div");
     imageContainer.className = "imageContainer";
     pokemonCard.appendChild(imageContainer);
     
     const cardImage = document.createElement("img");
     cardImage.className = "cardImage";
     cardImage.src = numOrderElement.img;
     imageContainer.appendChild(cardImage);     
     //pokemonCard += pokeCard
     //Aquí la tarjeta con el perfil de cada pokémon
     
     const profileContainer = document.createElement("div");
     profileContainer.className = "profileContainer";
     profileContainer.id = "profileContainer";
     document.body.appendChild(profileContainer);
     
     const profileCard = document.createElement("div");
     profileCard.className = "profileCard";
     profileCard.innerHTML = `
     <div class="profileCardLeft">
       <div class="profileName">${numOrderElement.name}</div>
       <div class="profileNumber">${numOrderElement.num}</div>
       <div class="profileImageContainer">
           <img src="${numOrderElement.img}" alt=""> 
       </div>
     </div>
     <div class="profileCardRight">
       <div class="profileEgg">Huevo: ${numOrderElement.egg}</div>
       <div class="profileCandyCount">Dulces: ${numOrderElement.candy_count}</div>
       <div class="spawnChanceTitle">Probabilidad de encontrarlo:</div>
       <div class="profileSpawnChance">${numOrderElement.spawn_chance}</div>
       <div class="typeTitle">Tipo:</div>
       <div class="profileType">${numOrderElement.type}</div>
       <div class="weaknessesTitle">Debilidades:</div>
       <div class="profileWeaknesses">${numOrderElement.weaknesses}</div>
     </div>         
     `
     profileContainer.appendChild(profileCard);
     
     const closeButton = document.createElement("div");
     closeButton.className = "closeButton";
     profileCard.appendChild(closeButton);
     
     const close = document.createElement('a');
     close.className = 'btn-cerrar-popup';
     closeButton.appendChild(close);
     const icon = document.createElement('i')
     icon.className = "far fa-times-circle";
     close.appendChild(icon);

    //CREANDO EVENTO ABRIR POPUP
    let eventImag = document.querySelectorAll('.cardImage')
    let eventImages = eventImag[eventImag.length-1];
    eventImages.addEventListener('click',abrirPopup);
    let overlay = document.querySelector('#profileContainer'); //el id lo tiene el overlay
    let popup =  document.querySelectorAll('.profileCard'); 
    let newPopup = popup[popup.length-1];
    let btnClosePopup = document.querySelectorAll('.btn-cerrar-popup');
    let newBtnClose = btnClosePopup[btnClosePopup.length-1];
    newBtnClose.addEventListener('click', cerrarPopup);

      function abrirPopup(){
           overlay.classList.add('active');
           newPopup.classList.add('active');
       };
       function cerrarPopup(){
          overlay.classList.remove('active');
          newPopup.classList.remove('active');
       };
  });

};

function limpiar(){
  document.querySelector("#root").innerHTML = "";
};

//let pokemon = ""
//fetch('./data/pokemon/pokemon.json')
//.then(res => res.json())
//.then(pokemon =>{
    //console.log(pokemon)
    //showPokemon(pokemon)


    //})
