import pokemon from './data/pokemon/pokemon.js';
 //console.log(pokemon);

const data = {
  saveNumber: (searchNumber) => {
    let forNumber = "";
    if (searchNumber <= 151) {
      forNumber = pokemon.find(nombre => nombre.id === searchNumber)
    }else{
      alert('Ingresa un número del 1 al 151');
    }
    // console.log(forNumber);
    return forNumber
  },
  showType: (pokemon, whatType) => {
    const typeFilter = pokemon.filter(item => {
      return item.type.includes(whatType);
    });
    return typeFilter;
  },
  showWeaknesses: (pokemon, whatWeaknesses) => {
    const weaknessesFilter = pokemon.filter(item => {
      return item.weaknesses.includes(whatWeaknesses)
    })
    return weaknessesFilter
  },
  orderNumber: (pokemon, saveOrder) => {
    // console.log(pokemon.sort());
    console.log(saveOrder);
    let orderFilter = "";
    switch (saveOrder) {
      case '1-151':
        orderFilter = pokemon.sort((a, b) => {
          return a.id - b.id;
        })
        break;
        case '151-1':
        orderFilter = pokemon.sort((a,b) => {
            return b.id - a.id;
      });
          break;
        case 'a-z':
        orderFilter = pokemon.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
            if (a.name < b.name) {
              return -1;
            }
          });
          break;
        case 'z-a':
        orderFilter = pokemon.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
                return 1;
            }
            });
          break;
      default:
        alert('Elige otra opción')
        break;
    }
    return orderFilter;
   },
}
export default data;
// export const filterData = () => {
 // return 'filterData';
// };
