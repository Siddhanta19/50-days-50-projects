import "./index.css";

const container = document.getElementById("container");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
	activeSlide++;

	if (activeSlide > slides.length - 1) {
		activeSlide = 0;
	}

	setBgToContainer();
	setActiveSlide();
});

leftBtn.addEventListener("click", () => {
	activeSlide--;

	if (activeSlide < 1) {
		activeSlide = slides.length - 1;
	}

	setBgToContainer();
	setActiveSlide();
});

const setBgToContainer = function () {
	// getting bg image from the active slide
	container.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

setBgToContainer();

const setActiveSlide = function () {
	slides.forEach((slide) => slide.classList.remove("active"));

	slides[activeSlide].classList.add("active");
};

setActiveSlide();
