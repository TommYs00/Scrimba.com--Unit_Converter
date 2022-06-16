/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.getElementById("user-input");
const convertButton = document.getElementById("convert-btn");

const conversionLength = document.getElementById("length");
const conversionVolume = document.getElementById("volume");
const conversionMass = document.getElementById("mass");

convertButton.addEventListener("click", function(){
    let userValue = userInput.value;
    console.log(typeof userValue)
})

