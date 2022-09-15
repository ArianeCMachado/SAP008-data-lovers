import { sortCharacters, filterGender, filterSpecie, filterStatu, CalAgregado } from '../src/data.js';

const Ricky= {
  name: "Ricky",
  status: "Alive",
  species: "Human",
  gender: "Male",
};
const Sam= {
  name: "Sam",
  status: "Alive",
  gender: "Female",
  species: "Human",
};
const Morty= {
  name: "Morty",
  status: "Alive",
  species: "Human",
  gender: "Male",
};
const Albert={
  name:"Albert Einstein",
  status: "Dead",
  gender: "Male",
  species: "Human",
};
const Beth={
  name: "Beth",
  status: "Alive",
  species: "Human",
  gender: "Female",
};
const Jerry ={
  name: "Jerry",
  status: "Dead",
  species: "Human",
  gender: "Male",
}

const characters = [ Ricky, Sam, Morty, Albert, Beth, Jerry]


describe('sortCharacters', () => {

  it('should be a function', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it('should return "Morty", "Ricky", "Sam" for "Ricky", "Sam", "Morty" with order=="A-Z"', () => {
    expect(sortCharacters(characters, "A-Z")).toStrictEqual([
      Albert,
      Beth,
      Jerry,
      Morty,
      Ricky,
      Sam
    ]);
  });

  it('should be a function', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it('should return "Morty", "Ricky", "Sam" for "Ricky", "Sam", "Morty" with order=="Z-A"', () => {
    expect(sortCharacters(characters, "Z-A")).toStrictEqual([
      Sam,
      Ricky,
      Morty,
      Jerry,
      Beth,
      Albert
    ]);
  });

});



describe('filterGender', () => {

  it('should be a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('should return "Sam" for characters with genders=="female"', () => {
    expect(filterGender(characters, "Female")).toStrictEqual([
      Sam,
      Beth
    ],
    );
  });
});


describe('filterSpecie', () => {

  it('should be a function', () => {
    expect(typeof filterSpecie).toBe('function');
  });

  it('should return "Ricky" for characters with Specie=="human"', () => {
    expect(filterSpecie(characters, "Human")).toStrictEqual([
      Ricky,
      Sam,
      Morty,
      Albert,
      Beth,
      Jerry
    ],
    );
  });
});



describe('filterStatu', () => {

  it('should be a function', () => {
    expect(typeof filterStatu).toBe('function');
  });

  it('should return "Sam" for characters with Status=="alive"', () => {
    expect(filterStatu(characters, "Alive")).toStrictEqual([
      Ricky,
      Sam,
      Morty,
      Beth
    ],
    );
  });
});


describe('CalAgregado', () => {

  it('should be a function', () => {
    expect(typeof CalAgregado).toBe('function');
  });

  it('should return 50%', () => {
    expect(CalAgregado(10, 5)).toEqual(50);
  });

  it('should return 20%', () => {
    expect(CalAgregado(10, 2)).toEqual(20);
  });

});