import "./index.css";

const loadText = document.querySelector(".loading-text");
const bg = document.querySelector("#bg");

let load = 0;

setInterval(blurring, 5);

function blurring() {
	if (load > 99) return;
	load++;
	loadText.innerText = `${load}%`;
	loadText.style.opacity = `${1 - load / 100}`;
	bg.style.filter = `blur(${30 - load * (30 / 100)}px)`;
}
