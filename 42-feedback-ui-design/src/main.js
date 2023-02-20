import "./index.css";

const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
	const clickedEl = e.target;
	if (clickedEl.closest("div").classList.contains("rating")) {
		removeActive();
		clickedEl.closest("div").classList.add("active");
		selectedRating = clickedEl.closest("div").lastElementChild.innerHTML;
	}
});

sendBtn.addEventListener("click", (e) => {
	panel.innerHTML = `<i class="fa fa-heart"></i>
    <strong>Thank You!</strong>
    <br />
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer experience</p>
    `;
});

function removeActive() {
	for (let i = 0; i < ratings.length; i++) {
		ratings[i].classList.remove("active");
	}
}
