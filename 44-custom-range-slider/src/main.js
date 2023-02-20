import "./index.css";

const range = document.getElementById("range");

range.addEventListener("input", (e) => {
	const eTarget = e.target;
	const value = +eTarget.value;
	const label = eTarget.nextElementSibling;

	label.innerHTML = value;
});
