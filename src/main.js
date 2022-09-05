import data from './data/rickandmorty/rickandmorty.js';

const divCharacter=document.querySelector(".characters")

const characters = data.results
const PrintarCards =lista => {
  const cards =lista.map(function(character){
    const cardHtml = ` <div class="cards"> <li>
    <img src = "${character.image}" class = "card-poster">
    <ul class ="cardText">
    <b>${character.name}</b>
    <br>
    Status: ${character.status}
    <br>
    Gender: ${character.gender}
    <br>
    Species: ${character.species}
    </ul> </li> </div>`
    return cardHtml
  })
  divCharacter.innerHTML=cards
}
PrintarCards(characters)

/*const orderAZ = (characters) => {
  return orderAZ(character.name).sort()
};

const orderZA = (item) => {
  return orderZA(item).reverse();
};*/
