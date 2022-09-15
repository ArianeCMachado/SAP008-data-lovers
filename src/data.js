export const sortCharacters = (characters, order) => {
  const copy = [...characters]
  if(order=="A-Z"){
    return copy.sort((a,b)=>{
      if(a.name > b.name){
        return 1
      }
      if(b.name > a.name){
        return -1
      }
    })
  }
  if(order=="Z-A"){
    return copy.sort((a,b)=>{
      if(a.name < b.name){
        return 1
      }
      if(b.name < a.name){
        return -1
      }
    })
  }
};

export const filterGender = (characters, gender) =>{
  return characters.filter(function(character){
    return character.gender === gender
    }
  )
};

export const filterSpecie = (characters, specie) =>{
  return characters.filter(function(character){
    return character.species === specie
    }
  )
};

export const filterStatu = (characters, statu) =>{
  return characters.filter(function(character){
    return character.status === statu
    }
  )
};

export const CalAgregado = (total,parcial) =>{
  return Math.round((parcial*100)/total);
};


