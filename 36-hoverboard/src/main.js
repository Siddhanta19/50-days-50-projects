import "./index.css";

const squareContainer = document.querySelector(".sub-container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const SQUARES = 1000;

for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement("div");
	square.classList.add("square");
	squareContainer.appendChild(square);
}

squareContainer.addEventListener("mouseover", (e) => {
	if (e.target.classList.contains("sub-container")) return;

	setColor(e.target);
});

squareContainer.addEventListener("mouseout", (e) => {
	console.log(e.target);
	if (e.target.classList.contains("sub-container")) return;

	removeColor(e.target.closest(".square"));
});

function setColor(el) {
	const color = getRandomColor();
	el.style.background = color;
	el.classList.add(`shadow-3xl`, `shadow-[${color}]`);
}

function removeColor(el) {
	if (el) {
		el.style.background = "#000";
	}
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
