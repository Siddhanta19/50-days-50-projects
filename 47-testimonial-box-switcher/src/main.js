import "./index.css";
import testimonials from "./assets/testimonials";

const testimonialsContrainer = document.querySelector(
	".testimonials-container"
);
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

let i = 0;

updateTestimonials();

function updateTestimonials() {
	const { name, position, photo, text } = testimonials()[i];

	testimonial.innerHTML = text;
	userImage.src = photo;
	username.innerHTML = name;
	role.innerHTML = position;

	i++;

	if (i > testimonials().length - 1) i = 0;
}

setInterval(() => {
	updateTestimonials();
}, 10000);
