dayjs.locale("pl");

// elements query
const mainDiv = document.getElementById("mainDiv");
const dateDiv = document.getElementById("dateDiv");
const hourDiv = document.getElementById("hourDiv");
const navList = document.getElementById("navList");
// const plusButton = document.getElementById("plusButton");
// const minusButton = document.getElementById("minusButton");
const calendarDiv = document.querySelector(".calendarDiv");
const items = navList.querySelectorAll("a");
// creat elements
const hourHeader = document.createElement("h1");
const weekDayHeader = document.createElement("h1");
const dateHeader = document.createElement("h1");
const monthName = document.createElement("h4");
monthName.setAttribute("class", "monthName");
const plusButton = document.createElement("button");
plusButton.setAttribute("onclick", "plusHandler()");
plusButton.setAttribute("id", "plusButton");
plusButton.setAttribute("class", "monthButton");
plusButton.innerText = ">>>";
const minusButton = document.createElement("button");
minusButton.setAttribute("id", "minusButton");
minusButton.setAttribute("onclick", "minusHandler()");
minusButton.setAttribute("class", "monthButton");
minusButton.innerText = "<<<";
/* create calendar */
let selectedMonth = dayjs();
const weekDaysPl = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"];
// populate calendar with delivered data
function populateCalendar(month) {
  calendarDiv.innerHTML = null;
  // put the month name above days & upper case first letter
  calendarDiv.appendChild(minusButton);
  calendarDiv.appendChild(monthName);
  calendarDiv.appendChild(plusButton);
  let firstLetter = selectedMonth.format("MMMM YYYY").slice(0, 1);
  let rest = selectedMonth.format("MMMM YYYY").slice(1);
  firstLetter = firstLetter.toUpperCase();
  monthName.innerText = firstLetter + rest;
  // populate calendar with names of weekdays in Polish
  weekDaysPl.forEach((item) => {
    const day = document.createElement("span");
    day.setAttribute("class", "weekDaySpan");
    day.innerText = item;
    calendarDiv.appendChild(day);
  });
  // how many day in month
  const daysInMonth = month.endOf("month").date();
  // function to get info about where month begins in witch day of week (0 is sunday )
  function getFirstDayOfMonth(date) {
    let day = date.startOf("month").day();
    if (day === 0) {
      day = 7;
    }
    return day;
  }

  const firstDayOfMonth = getFirstDayOfMonth(month);
  // populate beginning of calenar with empty filds until first day of month
  for (let i = 1; i < firstDayOfMonth; i++) {
    const day = document.createElement("span");
    // day.setAttribute("class", "daySpan");
    calendarDiv.appendChild(day);
  }
  // populate calendar with rest of days of month
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("span");
    day.setAttribute("class", "daySpan");
    day.setAttribute("id", `day-${i}`);
    day.innerText = i.toString();
    calendarDiv.appendChild(day);
  }
  calendarDiv.addEventListener("click", (e) => {
    const selectedDate = `${selectedMonth.format("YYYY-MM")}-${
      e.target.innerText
    }`;
    const parseDate = dayjs(selectedDate);
    console.log(parseDate);
  });
}
// onclick functions to add or subtract month
function plusHandler() {
  selectedMonth = selectedMonth.add(1, "month");
  populateCalendar(selectedMonth);
}
function minusHandler() {
  selectedMonth = selectedMonth.subtract(1, "month");
  populateCalendar(selectedMonth);
}
window.onload = populateCalendar(dayjs());

/* create calendar */

hourHeader.setAttribute("id", "hourHeader");
weekDayHeader.setAttribute("id", "weekDayHeader");
dateHeader.setAttribute("id", "dateHeader");
hourHeader.innerText = dayjs().format("HH:mm:ss");
dateHeader.innerText = dayjs().format("D MMMM YYYY");
weekDayHeader.innerText = dayjs().format("dddd");
dateDiv.appendChild(weekDayHeader);
hourDiv.appendChild(hourHeader);
dateDiv.appendChild(dateHeader);
// console.log("items", items);
items.forEach((link) => {
  if (window.location.href === link.href) {
    console.log(link.href);
    link.classList.add("activeLink");
    link.setAttribute("href", "#");
  }
});
const copyInside = (element) => {
  console.log(element);
};
hourHeader.addEventListener("click", (e) => {
  copyInside(e.target.innerText);
  e.target.innerText = "Copied!";
});
dateHeader.addEventListener("click", (e) => {
  copyInside(e.target.innerText);
  e.target.innerText = "Copied!";
  setTimeout(() => (e.target.innerText = dayjs().format("D MMMM YYYY")), 1000);
});

const clockTick = () => {
  const hour = dayjs().format("HH:mm:ss");
  const date = dayjs().format("D MMMM YYYY");
  hourHeader.innerText = hour;
  dateHeader.innerText = date;
};
setInterval(() => clockTick(), 1000);
