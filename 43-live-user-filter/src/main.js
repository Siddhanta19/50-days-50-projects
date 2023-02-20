import "./index.css";

const result = document.querySelector("#result");
console.log(filter);

let listItems = [];

const API_URL = "https://randomuser.me/api?results=100";

const getData = async function dataFromApi() {
	const res = await fetch(API_URL);
	const { results } = await res.json();

	console.log(results);

	result.innerHTML = "";
	results.forEach((user) => {
		const li = document.createElement("li");

		listItems.push(li);

		li.innerHTML = `
        <img src="${user.picture.large}"
        alt="${user.name.first}" />
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `;

		result.appendChild(li);
	});
};

getData();

const filterData = function filterBasedOnSearch(searchTerm) {
	// const filteredItems = listItems.filter(
	// 	(user) => user.textContent.toString() === true
	// );
	console.log(searchTerm.toLowerCase());

	listItems.forEach((item) => {
		if (item.textContent.match(new RegExp(`${searchTerm}`, "i"))) {
			item.classList.remove("hide");
		} else {
			item.classList.add("hide");
		}
	});

	console.log(listItems);

	// console.log(filteredItems);

	// result.innerHTML = "";
	// filteredItems.forEach((li) => {
	// 	result.appendChild(li);
	// });
};

filter.addEventListener("input", (e) => {
	filterData(e.target.value);
});
