import "./index.css";

const showNotification = document.querySelector(".btn");
const toasts = document.querySelector("#toasts");

const colors = ["text-black", "text-white", "text-yellow-300"];

showNotification.addEventListener("click", function () {
	toasts.insertAdjacentHTML(
		"beforeend",
		`<div class="toast opacity-0 -translate-y-10 ${
			colors[Math.floor(Math.random() * colors.length)]
		}">Toast Message</div>`
	);

	// Get all toast elements
	const toastElements = document.querySelectorAll(".toast");
	// Get the last element in the NodeList (which will be the newest element)
	const newestToastElement = toastElements[toastElements.length - 1];

	// Change the opacity of the newest toast element to 100 after a delay of 100 milliseconds
	// This will give the transition time to take effect
	setTimeout(() => {
		newestToastElement.classList.replace("-translate-y-10", "translate-y-0");
		newestToastElement.classList.replace("opacity-0", "opacity-100");
	}, 100);

	// remove the element that is getting inserted after 5000;
	setTimeout(() => {
		document.querySelector(".toast").remove();
	}, 5000);
});
