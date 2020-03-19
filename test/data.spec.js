// importamos la función `example`
import { data } from '../src/data';

describe('data', () => {
  it('should be an object', () => {
    expect(typeof data).toBe('object');
  });

  describe('data.saveNumber', () => {
    const pokemon = {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    "type": [
      "Grass",
      "Poison" 
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]}


    it('debería ser una función', () => {
      expect(typeof data.saveNumber).toBe('function');
    });
  
    it('should return 1 for input 1', () => {
      expect(pokemon.id).toEqual('1');
    });
  });


  describe('data.showType', () => {
    const pokemon = {
      "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    "type": [
      "Grass",
      "Poison" 
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]}

    it('debería ser una función', () => {
      expect(typeof data.showType).toBe('function');
    });
  
    it('should return Bulbasur for type Grass', () => {
      expect(pokemon).toHaveProperty('type', 'Grass');
    });
});

describe('data.showWeaknesses', () => {
  const pokemon = {
    "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  "type": [
    "Grass",
    "Poison" 
  ],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ]
  }

  it('debería ser una función', () => {
    expect(typeof data.showWeaknesses).toBe('function');
  });

  it('should return Bulbasur for weaknesses Ice', () => {
    expect(pokemon).toHaveProperty('weaknesses', 'Ice');
  });

});

escribe('data.orderNumber', () => {
  const pokemon = [{
    "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  "type": [
    "Grass",
    "Poison" 
  ],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ]
  }, {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
    "type": [
      "Grass",
      "Poison"
    ],

    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]
  },
]

  it('debería ser una función', () => {
    expect(typeof data.orderNumber).toBe('function');
  });

  it('should return Bulbasur first and Ivysaur after', () => {
    expect(pokemon).toHaveProperty('weaknesses', 'Ice');
  });

});






});
