import data from './data/rickandmorty/rickandmorty.js';
import { CalAgregado, filterGender, sortCharacters } from './data.js';

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
  const resultGender = filterGender(characters, gender)
  PrintarCards(resultGender)
  const porcent = resultGender.length
  const resultCalculo = CalAgregado(characters.length,porcent)
  document.getElementById("mensagem").innerHTML= "Esta categoria apresenta" +resultCalculo+"% dos personagens"
}
selectGenders.addEventListener("change",printGenderFiltered);

const selectOrderAZ = document.querySelector("#order");
const printAZOrdered =()=>{
  const orderAZ = selectOrderAZ.value
  const resultAZ = sortCharacters(characters,orderAZ)
  PrintarCards(resultAZ)
}
selectOrderAZ.addEventListener("change",printAZOrdered);


/*const selectSpecies = document.querySelector(".select-species");
const printSpeciesFiltered =()=>{
const specie = selectSpecies.value
const resultSpecie = characters.filter(function(character){
  return character.species === specie
  })
PrintarCards(resultSpecie)
}
selectSpecies.addEventListener("change",printSpeciesFiltered);*/