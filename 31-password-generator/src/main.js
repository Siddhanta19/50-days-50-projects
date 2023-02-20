import "./index.css";

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const getRandomLower = function () {
	return String.fromCharCode(Math.floor(Math.random() * 27) + 97);
};
const getRadomUpper = function () {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// ascii --> 48 - 57
const getRandomNumber = function () {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbol = function () {
	const symbols = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
	return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFunc = {
	lower: getRandomLower,
	upper: getRadomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

generateEl.addEventListener("click", function (e) {
	const length = +lengthEl.value > 20 ? 20 : +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	resultEl.innerText = generatePassword(
		hasLower,
		hasUpper,
		hasNumber,
		hasSymbol,
		length
	);
});

const generatePassword = function (lower, upper, number, symbol, length) {
	let generatedPassword = "";
	const typesCount = lower + upper + number + symbol;

	// filter creates a new array and returns only those elements of old array for which the callback function runs true.
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
		(item) => Object.values(item)[0]
	);

	if (!typesCount) return;

	console.log(typesArr);
	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach((type) => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}

	const finalPassword = generatedPassword.slice(0, length);
	return finalPassword;
};

clipboardEl.addEventListener("click", () => {
	const password = resultEl.innerText;
	if (!password) return;
	navigator.clipboard.writeText(password);
	alert("Password copied to clipboard!");
});
