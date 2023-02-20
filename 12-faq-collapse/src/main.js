import "./index.css";

const faqContainer = document.querySelector(".faq-container");

// using event delegation to handle the event from parent element.

faqContainer.addEventListener("click", (e) => {
	const clickedElement = e.target;
	if (!clickedElement.classList.contains("fa-solid")) return;

	console.log(clickedElement.closest(".faq"));
	clickedElement.closest(".faq").classList.toggle("active");
});
