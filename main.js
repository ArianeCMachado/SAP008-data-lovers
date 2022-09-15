import data from './data/rickandmorty/rickandmorty.js';
import { CalAgregado, filterGender, filterSpecie, filterStatu, sortCharacters } from './data.js';

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


const selectStatus = document.querySelector(".select-status");
const printStatusFiltered =()=>{
  const statu = selectStatus.value
  const resultStatu = filterStatu(characters,statu) 
  PrintarCards(resultStatu)
  const parcial = resultStatu.length
  const resultCalculo = CalAgregado(characters.length,parcial)
  document.getElementById("mensagem").innerHTML= "This category represents " +resultCalculo+ " % of the characters"
    }
  selectStatus.addEventListener("change",printStatusFiltered);
  
const selectSpecies = document.querySelector(".select-species");
const printSpeciesFiltered =()=>{
  const specie = selectSpecies.value
  const resultSpecie = filterSpecie(characters,specie)
  PrintarCards(resultSpecie)
  const parcial = resultSpecie.length
  const resultCalculo = CalAgregado(characters.length,parcial)
  document.getElementById("mensagem").innerHTML= "This category represents " +resultCalculo+ " % of the characters"
}
selectSpecies.addEventListener("change",printSpeciesFiltered);

const selectGenders = document.querySelector(".select-gender");
const printGenderFiltered =()=>{
  const gender = selectGenders.value
  const resultGender = filterGender(characters, gender)
  PrintarCards(resultGender)
  const parcial = resultGender.length
  const resultCalculo = CalAgregado(characters.length,parcial)
  document.getElementById("mensagem").innerHTML= "This category represents " +resultCalculo+ " % of the characters"
}
selectGenders.addEventListener("change",printGenderFiltered);

const selectOrderAZ = document.querySelector("#order");
const printAZOrdered =()=>{
  const orderAZ = selectOrderAZ.value
  const resultAZ = sortCharacters(characters,orderAZ)
  PrintarCards(resultAZ)
}
selectOrderAZ.addEventListener("change",printAZOrdered);
