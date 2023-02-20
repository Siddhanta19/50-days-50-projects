import "./index.css";

const nav = document.querySelector(".nav");

const navCoords = nav.getBoundingClientRect();
console.log(navCoords);

const obsCallback = function (entries, observer) {
	const [entry] = entries;
	console.log(entry);

	if (!entry.isIntersecting) nav.classList.add("fixed");
	else nav.classList.remove("fixed");
};

const navObserver = new IntersectionObserver(obsCallback, {
	root: null,
	threshold: 0,
	rootMargin: `-${navCoords.height}px`,
});

navObserver.observe(document.querySelector(".hero-section"));
