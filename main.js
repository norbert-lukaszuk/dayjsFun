dayjs.locale("pl");
// elements query
const mainDiv = document.getElementById("mainDiv");
const dateDiv = document.getElementById("dateDiv");
const hourDiv = document.getElementById("hourDiv");
const navList = document.getElementById("navList");
const calendarDiv = document.querySelector(".calendarDiv");
const items = navList.querySelectorAll("a");
// creat elements
const hourHeader = document.createElement("h1");
const weekDayHeader = document.createElement("h1");
const dateHeader = document.createElement("h1");
// calendar create
const weekDaysPl = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"];
// populate calendar with names of weekdays in Polish
weekDaysPl.forEach((item) => {
  const day = document.createElement("span");
  day.setAttribute("class", "weekDaySpan");
  day.innerText = item;
  calendarDiv.appendChild(day);
});
// how many day in month
const daysInMonth = dayjs().endOf("month").date();
// function to get info about where month begins in witch day of week (0 is sunday )
function getFirstDayOfMonth(date) {
  let day = date.startOf("month").day();
  if (day === 0) {
    day = 7;
  }
  return day;
}

const firstDayOfMonth = getFirstDayOfMonth(dayjs());
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
  day.innerText = i.toString();
  calendarDiv.appendChild(day);
}
console.log(calendarDiv.children);
// create calendar
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
