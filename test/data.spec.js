// importamos la función `example`
import { data } from "../src/data";

describe('data', () => {
  it('should be an object', () => {
    expect(typeof data).toBe('object');
  });

  describe('data.saveNumber', () => {

    it('debería ser una función', () => {
      expect(typeof data.saveNumber).toBe('function');
    });
  
    it('should return 1 for input 1', () => {
      expect(data.saveNumber(1, 'pokemon')).toContain('1');
    });
  });

  describe('data.saveNumber', () => {

    it('debería ser una función', () => {
      expect(typeof data.saveNumber).toBe('function');
    });
  
    it('should return 1 for input 1', () => {
      expect(data.saveNumber(1, 'pokemon')).toContain('1');
    });
  });

  describe('data.showType', () => {

    it('debería ser una función', () => {
      expect(typeof data.showType).toBe('function');
    });
  
    it('should return 1 for input 1', () => {
      expect(data.saveNumber(1, 'pokemon')).toContain('1');
    });

    


  });





})





