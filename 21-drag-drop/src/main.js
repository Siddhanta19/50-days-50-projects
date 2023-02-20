import "./index.css";

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
	empty.addEventListener("dragover", dragOver);
	empty.addEventListener("dragenter", dragEnter);
	empty.addEventListener("dragleave", dragLeave);
	empty.addEventListener("drop", dragDrop);
});

function dragStart() {
	this.className += " hold";

	setTimeout(() => (this.className = "invisible"), 100);
}

function dragEnd() {
	console.log("drag Ends");
	this.className = "fill";
}

function dragOver(e) {
	e.preventDefault();
	console.log("drag Over");
}

function dragEnter(e) {
	e.preventDefault();
	this.className += " hovered";
	console.log("drag Enter");
}
function dragLeave() {
	this.className = "empty";
	console.log("drag Leave");
}

function dragDrop(e) {
	e.preventDefault();
	this.className = "empty";
	this.append(fill);
	console.log("drag Drop");
}
