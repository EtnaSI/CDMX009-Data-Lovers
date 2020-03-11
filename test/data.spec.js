// importamos la función `example`
import { example } from "../src/data";

//describe('example', () => {

  //it('debería ser una función', () => {
    //expect(typeof example).toBe('function');
  //});

  //describe('example', () => {
    // escribe aquí tu test
  //});
//});
const pokemon = arrPokemon()
describe('SearchNumber', () => {
  
  it('pokemon has 1 on it', () => {
    
    expect(pokemon.id).toContain('1');
  });
});

describe('showType', () => {
  it('found Fire in pokemon',()=>{
    expect(pokemon.type).toContain('Fire')
  })
});
