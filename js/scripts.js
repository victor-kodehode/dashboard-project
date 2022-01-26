const data = await fetch('./data.json')
    .then(response => response.json())
    .then(rawData => rawData);

/* constants */
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const curr = document.getElementsByClassName("curr");
const prev = document.getElementsByClassName("prev");
const secondaries = data.length;

/* code & functions */
for (let i = 0; i < secondaries; i++) {
    curr[i].textContent = `${data[i].timeframes.daily.current}hrs`;
    prev[i].textContent = `Yesterday - ${data[i].timeframes.daily.previous}hrs`;
}
daily.addEventListener("click", function () {
    daily.classList.add("active-option");
    weekly.classList.remove("active-option");
    monthly.classList.remove("active-option");
    for (let i = 0; i < secondaries; i++) {
        curr[i].textContent = `${data[i].timeframes.daily.current}hrs`;
        prev[i].textContent = `Yesterday - ${data[i].timeframes.daily.previous}hrs`;
    }
});
weekly.addEventListener("click", function () {
    daily.classList.remove("active-option");
    weekly.classList.add("active-option");
    monthly.classList.remove("active-option");
    for (let i = 0; i < secondaries; i++) {
        curr[i].textContent = `${data[i].timeframes.weekly.current}hrs`;
        prev[i].textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
    }
});
monthly.addEventListener("click", function () {
    daily.classList.remove("active-option");
    weekly.classList.remove("active-option");
    monthly.classList.add("active-option");
    for (let i = 0; i < secondaries; i++) {
        curr[i].textContent = `${data[i].timeframes.monthly.current}hrs`;
        prev[i].textContent = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
    }
});
