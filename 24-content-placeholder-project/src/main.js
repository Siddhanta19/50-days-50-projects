import "./index.css";
import "tw-elements";

const invisibleEls = document.querySelectorAll(".invisible");
const animationEls = document.querySelectorAll(".animated-bg");
const animationTextEls = document.querySelectorAll(".animated-bg-text");

setTimeout(() => {
	renderContent();
}, 2000);

const cutAnimation = function () {
	animationEls.forEach((animationEl) =>
		animationEl.classList.remove("animated-bg")
	);

	animationTextEls.forEach((animationTextEl) =>
		animationTextEl.classList.remove("animated-bg-text")
	);
};

const renderContent = function () {
	cutAnimation();
	invisibleEls.forEach((invisibleEl) =>
		invisibleEl.classList.remove("invisible")
	);
};
