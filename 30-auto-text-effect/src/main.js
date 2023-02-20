import "./index.css";

const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming!";

let idx = 1;
let speed = 300 / speedEl.value;

const writeText = function () {
	textEl.innerText = text.slice(0, idx);

	idx++;

	if (idx > text.length) {
		return;
	}

	setTimeout(writeText, speed);
};

writeText();

speedEl.addEventListener("input", function (e) {
	speed = 300 / e.target.value;
});
