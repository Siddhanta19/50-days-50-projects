import "./index.css";

const wrapper = document.querySelector(".wrapper");
console.log(wrapper);

wrapper.addEventListener("click", function (e) {
	const panelClassOnClick = e.target.classList.contains("panel");
	const panels = e.target.closest(".wrapper").querySelectorAll(".panel");

	if (panelClassOnClick) {
		panels.forEach((panel) => {
			panel.classList.remove("active");
		});
		e.target.classList.add("active");
	}
});
