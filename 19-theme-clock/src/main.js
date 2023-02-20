import "./index.css";

const toggle = document.querySelector(".toggle");

function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// Dark Mode Text Change;
toggle.addEventListener("click", () => {
	document.documentElement.classList.toggle("dark");

	if (!document.documentElement.classList.contains("dark")) {
		toggle.innerText = "Light";
	}

	if (document.documentElement.classList.contains("dark")) {
		toggle.innerText = "Dark";
	}
});

// =========================================================
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

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

const setTime = function () {
	// new Date calls the constructor function of a class to create an object called time.
	const time = new Date(); // time is an object that has some properties available to it.

	const dayOfMonth = time.getDate();

	const day = days[time.getDay()];
	const month = months[time.getMonth()];
	const hours = time.getHours() % 12;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	/* console.log(
		`Day: ${day}, Month: ${month}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
	); */

	const displayHours = hours < 10 ? "0" + hours : hours;
	const displayMinutes = minutes < 10 ? "0" + minutes : minutes;

	timeEl.innerText = `${displayHours}:${displayMinutes}`;

	// setting date excluding dayOfMonth;
	dateEl.innerText = `${day},${month.slice(0, 3)}`;

	// setting dayOfMonth by creating the span;
	const circle = document.createElement("span");
	circle.classList.add("circle");
	dateEl.appendChild(circle);
	dateEl.querySelector(".circle").innerText = `${dayOfMonth}`;

	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		59,
		0,
		360
	)}deg)`;

	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		displayMinutes,
		0,
		59,
		0,
		360
	)}deg)`;

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		displayHours,
		0,
		11,
		0,
		360
	)}deg)`;
};

setInterval(() => {
	setTime();
}, 1000);
