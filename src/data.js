export const sortCharacters = (characters, order) => {
  if(order=="A-Z"){
    return characters.sort((a,b)=>{
      if(a.name > b.name){
        return 1
      }
      if(b.name > a.name){
        return -1
      }
    })
  }
  if(order=="Z-A"){
    return characters.sort((a,b)=>{
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

export const CalAgregado = (total,parcial) =>{
  return Math.round((parcial*100)/total);
};

