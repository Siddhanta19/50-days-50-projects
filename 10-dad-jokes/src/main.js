import "./index.css";

const jokeText = document.querySelector(".joke");
const btn = document.querySelector("#jokeBtn");

const getJoke = async function () {
	const rawData = await fetch("https://api.chucknorris.io/jokes/random", {
		method: "GET",
	});
	const jsonData = await rawData.json();
	const { value } = jsonData;

	return value;
};

const generateJoke = async function () {
	//prettier-ignore
	jokeText.innerHTML = `
    <div class="spinner w-12 h-12 border-8 border-gray-100 border-t-8 border-t-sky-800 animate-spin">
    </div>`;
	jokeText.innerText = await getJoke().catch((_err) => {
		jokeText.innerText = `Failed to load. Please Try Again`;
	});
};

generateJoke();

btn.addEventListener("click", generateJoke);
