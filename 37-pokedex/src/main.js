import "./index.css";
import axios, { isCancel, AxiosError } from "axios";

const themeBtn = document.querySelector(".theme-button");

const darkIcon = function () {
	const darkIcon = document.createElement("i");
	darkIcon.className = "fa-solid fa-moon";
	console.log(darkIcon);
	return darkIcon;
};

const lightIcon = function () {
	const lightIcon = document.createElement("i");
	lightIcon.className = "fa-solid fa-sun text-slate-100";
	console.log(lightIcon);
	return lightIcon;
};

themeBtn.addEventListener("click", function (e) {
	document.documentElement.classList.toggle("dark");

	const themeIcon = document.documentElement.classList.contains("dark")
		? darkIcon()
		: lightIcon();

	themeBtn.innerHTML = themeIcon.outerHTML;
});

// ================================================================
const cardWrapper = document.querySelector(".card-wrapper");

const getPokemons = async function (index) {
	try {
		const { data } = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${index}/`
		);
		return data;
	} catch (err) {
		console.log("error fetching!");
	}
};

const pokemonArray = await getPokemons(1);
console.log(pokemonArray);

const createCard = function (name, type, id) {
	const card = document.createElement("div");
	card.className = `card ${type}`;
	let badgeIdText = "";

	if (id < 10) {
		badgeIdText = `#00${id}`;
	} else if (id < 100) {
		badgeIdText = `#0${id}`;
	} else {
		badgeIdText = `#${id}`;
	}

	const cardChildrens = `
	<div class="pokemon-avatar flex items-center justify-center"> <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" alt="Pokemon ${id}" /></div>
	<button class="badge-id">${badgeIdText}</button>
	<h2 class="pokemon-name capitalize">${name}</h2>
	<small class="pokemon-type">Type<span class="font-bold"> : </span>
	<span class="type">${type}</span></small
					>`;
	card.innerHTML = cardChildrens;
	return card;
};

class Pokedex {
	constructor() {
		this.populateCards();
	}

	async populateCards() {
		for (let i = 1; i < 651; i++) {
			const pokemon = await getPokemons(i);

			console.log(pokemon);
			const {
				name,
				id,
				types: [
					{
						type: { name: type1 },
					},
				],
			} = pokemon;

			cardWrapper.insertAdjacentHTML(
				"beforeend",
				createCard(name, type1, id).outerHTML
			);
		}
	}
}

const pokedexInitialize = new Pokedex();
