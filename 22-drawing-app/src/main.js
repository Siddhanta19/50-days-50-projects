import "./index.css";

//get the elements

const canvas = document.querySelector("#canvas");
// draw 2d shapes in canvas
const ctx = canvas.getContext("2d");
const toolbox = document.querySelector(".toolbox");

const decrement = toolbox.querySelector("#decrease");
const increment = toolbox.querySelector("#increase");
const size = toolbox.querySelector("#size");
const colorEl = toolbox.querySelector("#color");
const clearBtn = toolbox.querySelector("#clear");

const canvasWidth = +canvas.clientWidth;
const canvasHeight = +canvas.clientHeight;

// =========================================================

let brushSize = 10;
let isPressed = false;
let x, y;

const drawCircle = function (x, y) {
	ctx.beginPath();
	ctx.arc(x, y, brushSize, 0, Math.PI * 2); // Outer circle
	ctx.fillStyle = colorEl.value;
	ctx.fill();
};

const drawLine = function (x1, y1, x2, y2) {
	ctx.beginPath();
	// moves to some position
	ctx.moveTo(x1, y1); // moving your pen on the page

	// draws a line from the moved position.
	ctx.lineTo(x2, y2); // putting your pen down and drawing to some position.
	ctx.strokeStyle = colorEl.value;
	ctx.lineWidth = brushSize * 2;
	ctx.stroke();
};

const updateSizeOnScreen = function () {
	console.log(size.textContent);
	size.textContent = brushSize;
};

// mouse handling in the canvas

canvas.addEventListener("mousedown", function (e) {
	isPressed = true;

	// getting the x position and y position of where the event happens with respect to origin
	// get the right distance and down.
	x = e.offsetX;
	y = e.offsetY;
});

canvas.addEventListener("mouseup", function (e) {
	isPressed = false;

	// getting the x position and y position of where the event happens with respect to origin
	// get the right distance and down.
	x = undefined;
	y = undefined;
});

canvas.addEventListener("mousemove", function (e) {
	//stop if the mouse is not being pressed, isPressed = false;
	if (!isPressed) return;

	const x2 = e.offsetX;
	const y2 = e.offsetY;

	drawCircle(x2, y2);
	drawLine(x, y, x2, y2);

	x = x2;
	y = y2;
});

// toolbar handling;

increment.addEventListener("click", function () {
	if (brushSize >= 30) return;

	brushSize += 5;
	updateSizeOnScreen();
});

decrement.addEventListener("click", function () {
	// stop this function if the brush size is 5;
	if (brushSize <= 5) return;

	brushSize -= 5;

	updateSizeOnScreen();
});

clearBtn.addEventListener("click", function () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// colorEl.addEventListener("input", function () {
// 	console.log("color changed");
// });
