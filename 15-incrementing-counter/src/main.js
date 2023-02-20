import "./index.css";

const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
	const counterAnimation = function () {
		const followersTotal = +counter.dataset.count;
		console.log(followersTotal);

		const followersText = +counter.innerText;
		console.log(followersText);

		const time = followersTotal / 200;
		console.log(time);

		if (followersText < followersTotal) {
			counter.innerText = time + followersText;
			setTimeout(counterAnimation, 1);
		} else {
			counter.innerText = followersTotal;
		}
	};
	counterAnimation();
});
