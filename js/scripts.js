const data = await fetch('./data.json') // fetch daily/weekly/monthly data from the json file
    .then(response => response.json()) // convert to js
    .then(rawData => rawData); // return the data
const optionsData = [[],[],[]]; // data array that is more easily accessible
for (let i = 0; i < data.length; i++) { // populate the array
    optionsData[0].push(data[i].timeframes.daily); // add the daily data
    optionsData[1].push(data[i].timeframes.weekly); // add the weekly data
    optionsData[2].push(data[i].timeframes.monthly); // add the monthly data
}
const prevStrings = ["Yesterday","Last Week","Last Month"]; // strings for the display
const options = document.getElementsByClassName("option"); // the 3 options that can be clicked (daily/weekly/monthly)
const curr = document.getElementsByClassName("curr"); // array of current times
const prev = document.getElementsByClassName("prev"); // array of previous times
updateNumbers(0);
for (let i = 0; i < options.length; i++) { // initialize the event listeners on the options
    options[i].addEventListener("click",()=>updateDisplay(i)); // clicking on option i runs updateDisplay(i)
}
function updateDisplay (optionIndex) { // function that updates the display, optionIndex indicates which option that was clicked
    for (let i = 0; i < options.length; i++) { // remove white from all 3 options
        options[i].classList.remove("active-option"); // removing the class that gives the white color
    }
    options[optionIndex].classList.add("active-option"); // adding back the class to the option that was clicked
    updateNumbers(optionIndex);
}
function updateNumbers (optionIndex) {
    for (let i = 0; i < data.length; i++) {
        curr[i].textContent = `${optionsData[optionIndex][i].current}hrs`; // update current times
        prev[i].textContent = `${prevStrings[optionIndex]} - ${optionsData[optionIndex][i].previous}hrs`; // update previous times
    }
}
