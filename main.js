dayjs.locale("pl");
const mainDiv = document.getElementById("mainDiv");
const dateDiv = document.getElementById("dateDiv");
const hourDiv = document.getElementById("hourDiv");
const navList = document.getElementById("navList");
const hourHeader = document.createElement("h1");
const weekDayHeader = document.createElement("h1");
const dateHeader = document.createElement("h1");
hourHeader.setAttribute("id", "hourHeader");
weekDayHeader.setAttribute("id", "weekDayHeader");
dateHeader.setAttribute("id", "dateHeader");
hourHeader.innerText = dayjs().format("HH:mm:ss");
dateHeader.innerText = dayjs().format("D MMMM YYYY");
weekDayHeader.innerText = dayjs().format("dddd");
dateDiv.appendChild(weekDayHeader);
hourDiv.appendChild(hourHeader);
dateDiv.appendChild(dateHeader);
console.log(navList.childNodes.keys());
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
