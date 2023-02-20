import "./index.css";

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

openBtn.addEventListener("click", () =>
	nav.forEach((navEl) => navEl.classList.add("open"))
);

closeBtn.addEventListener("click", () =>
	nav.forEach((navEl) => navEl.classList.remove("open"))
);
