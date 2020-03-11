import pokemon from './data/pokemon/pokemon.js';
import  data from './data.js'

//console.log(pokemon);

//for (var i = 0; i < pokemon.length; i++) { //Recorrer todos los arrays y que no los muestre
  //console.log(pokemon[i])
//}
pokemon.forEach(data => {
  //console.log(data);
  let name = data.name
  //console.log(name);
  let number = data.num
  var div = document.createElement('div')
  div.textContent = name + " " + "#"+number
  document.getElementById('root').appendChild(div)


})


let searchNumber = 0


let save = document.querySelector('#enterNumber')
save.addEventListener('click', saveNumber)

function saveNumber(){
  limpiar()
  searchNumber = parseInt(document.getElementById('number').value)
  let numberResult = data.saveNumber(searchNumber)
  console.log(numberResult);

  let name = numberResult.name
  console.log(name);
  let number = numberResult.num
  let div = document.createElement('div')
  div.textContent = name + " " + "#"+number 
  document.getElementById('root').appendChild(div)
  let image = document.createElement('img')
  image.src = numberResult.img
  div.appendChild(image)
  
  
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
    let name = typeElement.name
    let number = typeElement.num
    console.log(name);
    
    var div = document.createElement('div')
    div.textContent = name + " " + "#"+number
    document.getElementById('root').appendChild(div)
   
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
      let name = weaknessesElement.name
      console.log(name);
      let number = weaknessesElement.num
      var div = document.createElement('div')
      div.textContent = name + " " + "#"+number
      document.getElementById('root').appendChild(div)
      
      
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
    let name = numOrderElement.name
      console.log(name);
      let number = numOrderElement.num
      var div = document.createElement('div')
      div.textContent = name + " " + "#"+number
      document.getElementById('root').appendChild(div)
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
    
    

