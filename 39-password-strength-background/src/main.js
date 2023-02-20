import "./index.css";

const backgroundImg = document.getElementById("background");
const passwordField = document.getElementById("password");

passwordField.addEventListener("input", function (e) {
	switch (e.target.value.length) {
		case 0:
			backgroundImg.style.filter = `blur(20px)`;
			break;
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			backgroundImg.style.filter = `blur(10px)`;
			break;
		case 6:
			backgroundImg.style.filter = `blur(0px)`;
			break;
		default:
			backgroundImg.style.filter = `blur(0px)`;
	}
});
