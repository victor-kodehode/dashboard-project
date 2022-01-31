const data = await fetch('./data.json')
  .then(response => response.json())
  .then(rawData => rawData);
const strings = [["daily","weekly","monthly"],["Yesterday","Last Week","Last Month"]];
const curr = document.getElementsByClassName("curr");
const prev = document.getElementsByClassName("prev");
updateNumbers(strings[0][0],strings[1][0]);
for (let i = 0; i < strings[0].length; i++) {
  document.getElementById(strings[0][i]).addEventListener("click",()=>updateDisplay(strings[0][i],strings[1][i]));
}
function updateDisplay (name,last) {
  for (let i = 0; i < strings[0].length; i++) {
    document.getElementById(strings[0][i]).classList.remove("active-option");
  }
  document.getElementById(name).classList.add("active-option");
  updateNumbers(name,last);
}
function updateNumbers (name,last) {
  for (let i = 0; i < curr.length; i++) {
    curr[i].textContent = `${data[name].current}hrs`;
    prev[i].textContent = `${last} - ${data[name].previous}hrs`;
  }
}
