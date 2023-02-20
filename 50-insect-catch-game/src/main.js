import "./index.css";

const startGameBtn = document.querySelector(".btn");
const container = document.querySelector("main");

let count = 0;

const generateRandomNo = () => {
	return Math.floor(Math.random() * 81);
};

const createBrick = () => {
	const brick = document.createElement("div");
	brick.className = `brick w-20 h-20 fixed bg-purple-700 cursor-pointer shadow-md shadow-black rounded-md border-black border-2`;
	brick.style.inset = `${generateRandomNo()}% ${generateRandomNo()}% ${generateRandomNo()}% ${generateRandomNo()}%`;
	container.appendChild(brick);
};

const startGame = () => {
	startGameBtn.classList.add("hidden");

	const intervalForBrick = setInterval(createBrick, 1000);
};

startGameBtn.addEventListener("click", () => {
	startGame();
});

container.addEventListener("click", (e) => {
	if (!e.target.classList.contains("brick")) return;

	e.target.remove();
	count++;
	document.querySelector(".score").innerText = count;
});
