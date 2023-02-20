import "./index.css";

const smallCups = document.querySelectorAll(".cup-small");

const liters = document.querySelector("#liters");
const percentage = document.querySelector("#percentage");
const remainder = document.querySelector("#remainder");
console.log(remainder);

const updateBigCup = function (index) {
	const fullCups = document.querySelectorAll(".cup-small.full").length;
	console.log(fullCups);
	const totalCups = smallCups.length;

	if (fullCups === 0) {
		percentage.style.visibility = "hidden";
		percentage.style.height = 0;
	}
	if (fullCups > 0) {
		percentage.style.visibility = "visible";
		percentage.style.height = `${(fullCups / totalCups) * 330}px`;
		percentage.innerText = `${(fullCups / totalCups) * 100}%`;
	}

	if (fullCups === totalCups) {
		remainder.style.visibility = "hidden";
		remainder.style.height = 0;
	}

	if (fullCups !== totalCups) {
		remainder.style.visibility = "visible";
		liters.innerText = `${2 - (250 * fullCups) / 1000}`;
	}
};

const highlightCups = function (clickedIndex) {
	if (
		smallCups[clickedIndex].classList.contains("full") &&
		!smallCups[clickedIndex].nextElementSibling?.classList.contains("full")
	) {
		clickedIndex--;
	}

	smallCups.forEach((cup, cupIndex) => {
		if (cupIndex <= clickedIndex) {
			cup.classList.add("full");
		}
		if (cupIndex > clickedIndex) {
			cup.classList.remove("full");
		}
	});

	updateBigCup();
};

smallCups.forEach((cup, clickedIndex) => {
	cup.addEventListener("click", () => {
		highlightCups(clickedIndex);
	});
});
