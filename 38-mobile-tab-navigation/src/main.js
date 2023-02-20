import "./index.css";

const menuContainer = document.querySelector("nav ul");
const screens = document.querySelectorAll(".content");
const phone = document.querySelector(".phone");

menuContainer.addEventListener("click", (e) => {
	const menuButtons = e.currentTarget.querySelectorAll("li");
	menuButtons.forEach((menuButton) => menuButton.classList.remove("active"));

	// add an event listener to the menu button that's getting clicked.
	const menuButtonClicked = e.target.closest("li");
	menuButtonClicked.classList.add("active");

	const parentElement = e.currentTarget;
	const childElement = menuButtonClicked;
	const index = Array.prototype.indexOf.call(
		parentElement.children,
		childElement
	);

	console.log(phone.children[index]);
	Array.from(phone.children).forEach((child) => child.classList.remove("show"));
	if (phone.children[index].classList.contains("content"))
		phone.children[index].classList.add("show");
});
