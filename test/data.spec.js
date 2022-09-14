import { sortCharacters } from '../src/data.js';

const characters = [{
  name: "Ricky"
}, {
  name: "Sam"
}, {
  name: "Morty"
}
]

describe('sortCharacters', () => {

  it('should be a function', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it('should return "Morty", "Ricky", "Sam" for "Ricky", "Sam", "Morty" with order=="A-Z"', () => {
    expect(sortCharacters(characters, "A-Z")).toStrictEqual([{
      name: "Morty"
    }, {
      name: "Ricky"
    }, {
      name: "Sam"
    }
    ]);
  });

});


/*it('should return "abobora","banana", "maça" for "banana", "maca", "abobora" with order==="A-Z", () => {
  expect(sortCharacters(a,b "banana", "maca", "abobora")).toBe("abobora","banana", "maça")
});*/

/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/