import "./index.css";

const tagsEl = document.getElementById("tags"),
	textarea = document.getElementById("textarea");

textarea.focus();

// utility functions

const createTags = function (input) {
	const tags = input
		.split(",")
		.filter((tag) => tag.trim() !== "")
		.map((tag) => tag.trim());

	tagsEl.innerHTML = "";

	tags.forEach((tag) => {
		const tagEl = document.createElement("span");
		tagEl.classList.add("tag");
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	});
	// console.log(tags);
};

const pickRandomTag = function () {
	const tags = document.querySelectorAll(".tag");
	return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = function (tag) {
	tag.classList.add("highlight");
};

const unHighlightTag = function (tag) {
	tag.classList.remove("highlight");
};

const randomSelect = function () {
	const times = 30;

	// run this every 100ms
	const interval = setInterval(() => {
		const randomTag = pickRandomTag();
		highlightTag(randomTag);

		setTimeout(() => {
			unHighlightTag(randomTag);
		}, 100);
	}, 100);

	// run this after times*100
	setTimeout(() => {
		// clear the interval running every 100ms
		clearInterval(interval);

		// highlight a random tag
		setTimeout(() => {
			const randomTag = pickRandomTag();
			highlightTag(randomTag);
		}, 100);
	}, times * 100);
};

textarea.addEventListener("keyup", function (e) {
	createTags(e.target.value);

	if (e.key === "Enter") {
		setTimeout(() => {
			e.target.value = "";
		}, 10);

		randomSelect();
	}
});
