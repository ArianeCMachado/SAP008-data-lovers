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

