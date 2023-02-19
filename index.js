// displaying the current month in the header

const monthEl = document.querySelector(".date h1");
const currentMonth = new Date().getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthEl.innerText = months[currentMonth];

// displaying the current date in the header

const dateEl = document.querySelector(".date p");
const currentDate = new Date().toDateString();

dateEl.innerText = currentDate;

// displaying the actual calendar content

const daysEl = document.querySelector(".days");

const lastDay = new Date(
  new Date().getFullYear(),
  currentMonth + 1,
  0
).getDate();

const firstDay = new Date(new Date().getFullYear(), currentMonth, 1).getDay();

let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class='today'>${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysEl.innerHTML = days;
