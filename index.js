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
    let userValue = Number(userInput.value);
    if (userValue !== NaN) {

        let metersToFeet = (userValue * 3.281).toFixed(3);
        let feetToMeters = (userValue / 3.281).toFixed(3);

        let litersToGallons = (userValue * 0.264).toFixed(3);
        let gallonsToLiters = (userValue / 0.264).toFixed(3);

        let kilogramsToPounds = (userValue * 2.204).toFixed(3);
        let poundsToKilograms = (userValue / 2.204).toFixed(3);

        conversionLength.textContent = `${userValue} meters = ${metersToFeet} feet | ${userValue} feet = ${feetToMeters} meters`
        conversionVolume.textContent = `${userValue} liters = ${litersToGallons} gallons | ${userValue} gallons = ${gallonsToLiters} liters`
        conversionMass.textContent = `${userValue} kilos = ${kilogramsToPounds} pounds | ${userValue} pounds = ${poundsToKilograms} kilos`
    }
})