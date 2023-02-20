import "./index.css";

const nums = document.querySelectorAll(".nums span");

const counter = document.querySelector(".counter");

const finalMessage = document.querySelector(".final");

const replay = document.querySelector("#replay");

const resetDOM = function () {
	counter.classList.remove("hide");
	finalMessage.classList.remove("show");

	nums.forEach((num) => {
		num.classList.value = "";
	});

	nums[0].classList.add("in");
};

const runAnimation = function () {
	nums.forEach((num, i) => {
		const nextToLast = nums.length - 1;

		num.addEventListener("animationend", (e) => {
			if (e.animationName === "goIn" && i !== nextToLast) {
				num.classList.remove("in");
				num.classList.add("out");
			} else if (e.animationName === "goOut" && num.nextElementSibling) {
				num.nextElementSibling.classList.add("in");
			} else {
				counter.classList.add("hide");
				finalMessage.classList.add("show");
			}
		});
	});
};

replay.addEventListener("click", (e) => {
	resetDOM();
	runAnimation();
});

runAnimation();
