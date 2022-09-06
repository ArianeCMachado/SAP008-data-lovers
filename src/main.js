import data from './data/rickandmorty/rickandmorty.js';

const divCharacter=document.querySelector(".characters")

const characters = data.results
const PrintarCards =lista => {
  const cards =lista.map(function(character){
    const cardHtml = ` <div class="cards"> <li>
    <img src = "${character.image}" class = "card-poster">
    <ul class ="cardText">
    ${character.name}
    <br>
    Status: ${character.status}
    <br>
    Gender: ${character.gender}
    <br>
    Species: ${character.species}
    </ul> </li> </div>`
    return cardHtml
  }).join("")
  divCharacter.innerHTML=cards
  }
PrintarCards(characters)

const selectSpecies = document.querySelector(".select-species");
const printSpeciesFiltered =()=>{
const specie = selectSpecies.value
const resultSpecie = characters.filter(function(character){
  return character.species === specie
  })
PrintarCards(resultSpecie)
}
selectSpecies.addEventListener("change",printSpeciesFiltered);

const selectStatus = document.querySelector(".select-status");
const printStatusFiltered =()=>{
const statu = selectStatus.value
const resultStatu = characters.filter(function(character){
  return character.status === statu
  })
  PrintarCards(resultStatu)
  }
selectStatus.addEventListener("change",printStatusFiltered);

const selectGenders = document.querySelector(".select-gender");
const printGenderFiltered =()=>{
const gender = selectGenders.value
const resultGender = characters.filter(function(character){
  return character.gender === gender
  })
  PrintarCards(resultGender)
  }
selectGenders.addEventListener("change",printGenderFiltered);

/*const selectOrderAZ = document.querySelector(".selectAZ");
const printAZOrdered =()=>{
const orderAZ = selectOrderAZ.value
const resultAZ = characters.sort(function(character){
  return character.name === orderAZ
  })
  PrintarCards(resultAZ)
  }
selectOrderAZ.addEventListener("change",printAZOrdered);*/

