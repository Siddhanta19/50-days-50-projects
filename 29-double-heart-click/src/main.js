import "./index.css";

const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

// let clickTime = 0;
let timesClicked = 0;

const createHeart = (e) => {
	const heart = document.createElement("i");
	heart.classList.add(
		"fa-solid",
		"fa-heart",
		"dark:text-red-500",
		"text-red-600"
	);

	//prettier-ignore
	const x = e.clientX, y = e.clientY;

	const leftOffset = e.target.offsetLeft;
	const topOffset = e.target.offsetTop;

	const xInside = x - leftOffset;
	const yInside = y - topOffset;

	heart.style.top = `${yInside}px`;
	heart.style.left = `${xInside}px`;

	loveMe.appendChild(heart);
	times.innerHTML = ++timesClicked;

	setTimeout(() => heart.remove(), 5000);
};

// reinventing the double click function
/* loveMe.addEventListener("click", (e) => {
	if (clickTime === 0) {
		clickTime = new Date().getTime();
		console.log(clickTime);
	} else {
		if (new Date().getTime() - clickTime < 800) {
			createHeart(e);
			clickTime = 0;
		} else {
			clickTime = new Date().getTime();
			console.log(clickTime);
		}
	}
}); */

loveMe.addEventListener("dblclick", (e) => createHeart(e));
