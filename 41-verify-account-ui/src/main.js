import "./index.css";

const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, i) => {
	code.addEventListener("keydown", (e) => {
		if (e.key > 9) return;
		codes[i].value = "";
		setTimeout(() => codes[i + 1].focus(), 10);

		if (e.key === "Backspace") {
			setTimeout(() => {
				if (i === 0) return;
				codes[i - 1].focus();
				codes[i - 1].setSelectionRange(0, 1);
			}, 10);
		}
	});
});
