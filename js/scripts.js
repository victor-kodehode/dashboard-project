/* the data that will be displayed */
const data = await fetch('./data.json') // fetch daily/weekly/monthly data from the json file
    .then(response => response.json()) // convert to js
    .then(rawData => rawData); // return the data
const dailyData = [];
const weeklyData = [];
const monthlyData = [];
for (let i = 0; i < data.length; i++) {
    dailyData.push(data[i].timeframes.daily);
    weeklyData.push(data[i].timeframes.weekly);
    monthlyData.push(data[i].timeframes.monthly);
}
const optionsData = [dailyData,weeklyData,monthlyData];

/* constants */
const daily = document.getElementById("daily"); // the daily button
const weekly = document.getElementById("weekly"); // the weekly button
const monthly = document.getElementById("monthly"); // the monthly button
const options = [daily,weekly,monthly]; // the 3 options placed inside an array for ease of access
const curr = document.getElementsByClassName("curr"); // array of current times
const prev = document.getElementsByClassName("prev"); // array of previous times

/* code that runs when website is opened */
for (let i = 0; i < data.length; i++) { // display daily data by default
    curr[i].textContent = `${optionsData[0].current}hrs`; // update current times
    prev[i].textContent = `Yesterday - ${optionsData[0].previous}hrs`; // update previous times
}

/* code that is called */
function updateDisplay (optionIndex) {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("active-option");
    }
    options[optionIndex].classList.add("active-option");
    for (let i = 0; i < data.length; i++) {
        curr[i].textContent = `${optionsData[optionIndex].current}hrs`; // update current times
        prev[i].textContent = `Yesterday - ${optionsData[optionIndex].previous}hrs`; // update previous times
    }
}

/* code that runs when an event is triggered i.e. clicking on an option */
daily.addEventListener("click", function () { // when you click on the daily option
    updateDisplay(0);
});
weekly.addEventListener("click", function () { // when you click on the weekly button
    updateDisplay(1);
});
monthly.addEventListener("click", function () { // when you click on the monthly button
    updateDisplay(2);
});
