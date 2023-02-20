import "./index.css";

const prevBtn = document.querySelector("#left");
const nextBtn = document.querySelector("#right");
const images = document.querySelectorAll("img");
const imageContainer = document.querySelector(".image-container");

let curImageIndex = 0;

nextBtn.addEventListener("click", () => {
	curImageIndex = (curImageIndex + 1) % images.length;
	imageContainer.style.transform = `translateX(calc(${-100}%*${curImageIndex}))`;
});

prevBtn.addEventListener("click", () => {
	curImageIndex = (curImageIndex + images.length - 1) % images.length;
	imageContainer.style.transform = `translateX(calc(${-100}%*${curImageIndex}))`;
});
