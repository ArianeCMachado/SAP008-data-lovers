import { sortCharacters, filterGender, filterSpecie, filterStatu, CalAgregado } from '../src/data.js';

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

  it('should be a function', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it('should return "Morty", "Ricky", "Sam" for "Ricky", "Sam", "Morty" with order=="Z-A"', () => {
    expect(sortCharacters(characters, "Z-A")).toStrictEqual([{
      name: "Sam"
    }, {
      name: "Ricky"
    }, {
      name: "Morty"
    }
    ]);
  });

});

const charactersGender = [{
  name: "Rick", 
  gender: "Male",
  status: "Alive"
}, {
  name: "Sam", 
  gender: "Female",
  status: "Alive"
}
];

describe('filterGender', () => {

  it('should be a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('should return "Sam" for characters with genders=="female"', () => {
    expect(filterGender(charactersGender, "Female")).toStrictEqual([{
      name: "Sam",
      gender: "Female",
      status: "Alive",
    }],
    );
  });
});

const charactersSpecies = [{
  name: "Ricky", 
  gender: "Male",
  species: "Human"
}, {
  name: "Abadango Cluster Princess", 
  gender: "Female",
  species: "Alien"
}
];

describe('filterSpecie', () => {

  it('should be a function', () => {
    expect(typeof filterSpecie).toBe('function');
  });

  it('should return "Ricky" for characters with Specie=="human"', () => {
    expect(filterSpecie(charactersSpecies, "Human")).toStrictEqual([{
      name: "Ricky", 
      gender: "Male",
      species: "Human",
    }],
    );
  });
});


const charactersStatus = [{
  name: "Ricky", 
  genders: "Male",
  status: "Dead"
}, {
  name: "Sam", 
  genders: "Female",
  status: "Alive"
}
];


describe('filterStatu', () => {

  it('should be a function', () => {
    expect(typeof filterStatu).toBe('function');
  });

  it('should return "Sam" for characters with Status=="alive"', () => {
    expect(filterStatu(charactersStatus, "Alive")).toStrictEqual([{
      name: "Sam", 
      genders: "Female",
      status: "Alive",
    }],
    );
  });
});


describe('CalAgregado', () => {

  it('should be a function', () => {
    expect(typeof CalAgregado).toBe('function');
  });
});








/*

const characters = [{
  "name": "Ricky",
  "Status": "Alive",
  "Species": "Human",
  "Gender": "Male",
}, {
  "name": "Sam",
  "Status": "Alive",
  "Gender": "Female",
  "Species": "Human",
}, {
  "name": "Morty",
  "Status": "Alive",
  "Species": "Human",
  "Gender": "Male",
},{
  "Name":"Albert Einstein",
  Status: "Dead",
  Gender: "Male",
  Species: "Human",
},{
  Name: "Beth",
  Status: "Alive",
  Species: "Human",
  Gender: "Female",
},{
  name: "Jerry",
  status: "Dead",
  species: "Human",
  gender: "Male",
}
]



describe('filterGender', () => {

  it('should be a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('should return "Sam", "Beth" for characters with genders=="female"', () => {
    expect(filterGender(characters, "Female")).toBe([{
      name: "Sam",
      Status: "Alive",
      Gender: "Female",
      Species: "Human",
    }], [{
      Name: "Beth",
      Status: "Alive",
      Species: "Human",
      Gender: "Female",
    },
    ]);
  });

});

describe('filterSpecie', () => {

  it('should be a function', () => {
    expect(typeof filterSpecie).toBe('function');
  });

  it('should return "Sam", "Beth" for characters with genders=="female"', () => {
    expect(filterGender(characters, "Female")).toBe([{
      name: "Sam",
      Status: "Alive",
      Gender: "Female",
      Species: "Human",
    }], [{
      Name: "Beth",
      Status: "Alive",
      Species: "Human",
      Gender: "Female",
    },
    ]);
  });

});

describe('filterStatu', () => {

  it('should be a function', () => {
    expect(typeof filterStatu).toBe('function');
  });

  it('should return "Sam", "Beth" for characters with genders=="female"', () => {
    expect(filterGender(characters, "Female")).toBe([{
      name: "Sam",
      Status: "Alive",
      Gender: "Female",
      Species: "Human",
    }], [{
      Name: "Beth",
      Status: "Alive",
      Species: "Human",
      Gender: "Female",
    },
    ]);
  });

});

describe('CalAgregado', () => {

  it('should be a function', () => {
    expect(typeof CalAgregado).toBe('function');
  });

  it('should return "Sam", "Beth" for characters with genders=="female"', () => {
    expect(filterGender(characters, "Female")).toBe([{
      name: "Sam",
      Status: "Alive",
      Gender: "Female",
      Species: "Human",
    }], [{
      Name: "Beth",
      Status: "Alive",
      Species: "Human",
      Gender: "Female",
    },
    ]);
  });

});*/