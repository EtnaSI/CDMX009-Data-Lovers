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

describe('Search number', () => {

  it('pokemon has id on it', () => {
    
    expect(pokemon).toContain('id');
  });

  describe('example', () => {
    // escribe aquí tu test
  });
});
