import "./index.css";

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

class App {
	currentActive = 1;
	constructor() {
		next.addEventListener("click", this._next.bind(this));
		prev.addEventListener("click", this._prev.bind(this));
	}

	// increment currentActive on clicking next btn
	_next() {
		this.currentActive++;

		if (this.currentActive > circles.length) {
			// restricting increment once it gets to the last circle
			this.currentActive = circles.length;
		}

		this._updateDOM();
	}

	// decrement currentActive on clicking prev
	_prev() {
		this.currentActive--;

		if (this.currentActive < 1) {
			// restricting decrement once it gets to the first circle
			this.currentActive = 1;
		}

		this._updateDOM();
	}

	// change progress based on active classes on el
	_changeProgress() {
		const actives = document.querySelectorAll(".active");

		// changing the progress bar width based on the elements with active class

		progress.style.width = `${
			((actives.length - 0.4) / circles.length) * 100
		}%`;

		// setting the width as 0 if only the first element is active
		if (actives.length === 1) progress.style.width = `${0}%`;
	}

	// configure active class based on current active
	_updateDOM() {
		circles.forEach((circle, i) => {
			if (i < this.currentActive) {
				circle.classList.add("active");
			}

			if (i >= this.currentActive) {
				circle.classList.remove("active");
			}
		});

		this._changeProgress();

		if (this.currentActive === 1) {
			prev.disabled = true;
		}

		if (this.currentActive === circles.length) {
			next.disabled = true;
		}

		if (this.currentActive > 1 && this.currentActive < circles.length) {
			prev.disabled = false;
			next.disabled = false;
		}
	}
}

const app = new App();
