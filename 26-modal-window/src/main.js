import "./index.css";

const container = document.querySelector("#container");
const openModalBtn = document.querySelector(".openModalBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");

openModalBtn.addEventListener("click", () => {
	container.classList.add("opened");
});

closeModalBtn.addEventListener("click", () => {
	container.classList.remove("opened");
});
