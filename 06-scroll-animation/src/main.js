import "./index.css";

const boxes = document.querySelectorAll(".box");

const boxCallback = function (entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;
	entry.target.classList.add("show");
	console.log(entry);
	observer.unobserve(entry.target);
};

const boxObserver = new IntersectionObserver(boxCallback, {
	root: null,
	threshold: 0.1,
});
boxes.forEach((box) => {
	boxObserver.observe(box);
});
