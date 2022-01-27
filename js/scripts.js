/* the data that will be displayed */
const data = await fetch('./data.json') // fetch daily/weekly/monthly data from the json file
    .then(response => response.json()) // convert to js
    .then(rawData => rawData); // return the data

/* constants */
const daily = document.getElementById("daily"); // the daily button
const weekly = document.getElementById("weekly"); // the weekly button
const monthly = document.getElementById("monthly"); // the monthly button
const curr = document.getElementsByClassName("curr"); // array of current times
const prev = document.getElementsByClassName("prev"); // array of previous times
const secondaries = data.length; // number of cards i.e. work, play, etc

/* code that runs when website is opened */
for (let i = 0; i < secondaries; i++) { // display daily data by default
    curr[i].textContent = `${data[i].timeframes.daily.current}hrs`; // update current times
    prev[i].textContent = `Yesterday - ${data[i].timeframes.daily.previous}hrs`; // update previous times
}

/* code that runs when an event is triggered i.e. clicking on a button */
daily.addEventListener("click", function () { // when you click on the daily button
    daily.classList.add("active-option"); // daily button turns white
    weekly.classList.remove("active-option"); // weekly button turns dark
    monthly.classList.remove("active-option"); // monthly button turns dark
    for (let i = 0; i < secondaries; i++) { // display daily data
        curr[i].textContent = `${data[i].timeframes.daily.current}hrs`; // update current times
        prev[i].textContent = `Yesterday - ${data[i].timeframes.daily.previous}hrs`; // update previous times
    }
});
weekly.addEventListener("click", function () { // when you click on the weekly button
    daily.classList.remove("active-option"); // daily button turns dark
    weekly.classList.add("active-option"); // weekly button turns white
    monthly.classList.remove("active-option"); // monthly button turns dark
    for (let i = 0; i < secondaries; i++) { // display weekly data
        curr[i].textContent = `${data[i].timeframes.weekly.current}hrs`; // update current times
        prev[i].textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`; // update previous times
    }
});
monthly.addEventListener("click", function () { // when you click on the monthly button
    daily.classList.remove("active-option"); // daily button turns dark
    weekly.classList.remove("active-option"); // weekly button turns dark
    monthly.classList.add("active-option"); // monthly button turns white
    for (let i = 0; i < secondaries; i++) { // display monthly data
        curr[i].textContent = `${data[i].timeframes.monthly.current}hrs`; // update current times
        prev[i].textContent = `Last Month - ${data[i].timeframes.monthly.previous}hrs`; // update previous times
    }
});
