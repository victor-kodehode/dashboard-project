/*
    +----------------------+
    | temporary workaround |
    +----------------------+
const data = [
    {
        title: "Work",
        timeframes: {
            daily: {
                current: 5,
                previous: 7
            },
            weekly: {
                current: 32,
                previous: 36
            },
            monthly: {
                current: 103,
                previous: 128
            }
        }
    },
    {
        title: "Play",
        timeframes: {
            daily: {
                current: 1,
                previous: 2
            },
            weekly: {
                current: 10,
                previous: 8
            },
            monthly: {
                current: 23,
                previous: 29
            }
        }
    },
    {
        title: "Study",
        timeframes: {
            daily: {
                current: 0,
                previous: 1
            },
            weekly: {
                current: 4,
                previous: 7
            },
            monthly: {
                current: 13,
                previous: 19
            }
        }
    },
    {
        title: "Exercise",
        timeframes: {
            daily: {
                current: 1,
                previous: 1
            },
            weekly: {
                current: 4,
                previous: 5
            },
            monthly: {
                current: 11,
                previous: 18
            }
        }
    },
    {
        title: "Social",
        timeframes: {
            daily: {
                current: 1,
                previous: 3
            },
            weekly: {
                current: 5,
                previous: 10
            },
            monthly: {
                current: 21,
                previous: 23
            }
        }
    },
    {
        title: "Self Care",
        timeframes: {
            daily: {
                current: 0,
                previous: 1
            },
            weekly: {
                current: 2,
                previous: 2
            },
            monthly: {
                current: 7,
                previous: 11
            }
        }
    }
];
    +----------------------+
    | temporary workaround |
    +----------------------+
*/
const data = [];
fetch('data.json')
    .then(response => response.json())
    .then(rawData => {
        data.push(rawData);
    });
console.log(data);

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
    daily.style.color = "white";
    weekly.style.color = "hsl(235,45%,61%)";
    monthly.style.color = "hsl(235,45%,61%)";
    for (let i = 0; i < secondaries; i++) {
        curr[i].textContent = `${data[i].timeframes.daily.current}hrs`;
        prev[i].textContent = `Yesterday - ${data[i].timeframes.daily.previous}hrs`;
    }
});
weekly.addEventListener("click", function () {
    daily.style.color = "hsl(235,45%,61%)";
    weekly.style.color = "white";
    monthly.style.color = "hsl(235,45%,61%)";
    for (let i = 0; i < secondaries; i++) {
        curr[i].textContent = `${data[i].timeframes.weekly.current}hrs`;
        prev[i].textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
    }
});
monthly.addEventListener("click", function () {
    daily.style.color = "hsl(235,45%,61%)";
    weekly.style.color = "hsl(235,45%,61%)";
    monthly.style.color = "white";
    for (let i = 0; i < secondaries; i++) {
        curr[i].textContent = `${data[i].timeframes.monthly.current}hrs`;
        prev[i].textContent = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
    }
});
