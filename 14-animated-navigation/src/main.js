import "./index.css";

const toggle = document.getElementById("toggle"),
	nav = document.getElementById("nav");

toggle.addEventListener("click", function () {
	nav.classList.toggle("active");
});
