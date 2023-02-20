import "./index.css";

import axios, { isCancel, AxiosError } from "axios";

const form = document.getElementById("form");
const search = document.getElementById("search");
const avatar = document.querySelector(".avatar");
const cardWrapper = document.querySelector("#main");

const API_URL = "https://api.github.com/users";

const createErrorCard = function (err) {
	const cardHTML = `
    <div class="card mx-10">
        <h1 class="text-2xl font-semibold text-red-500">${err}</h1>
    </div>
    `;

	cardWrapper.innerHTML = cardHTML;
};

const getUser = async function (username) {
	try {
		const { data } = await axios(`${API_URL}/${username}`);
		return data;
	} catch (err) {
		if (err.response.status === 404) {
			createErrorCard("No github profile with this username");
		} else {
			createErrorCard("Something went wrong. Please try again!");
		}
	}
};

const getUserRepos = async function (username) {
	try {
		const { data } = await axios(`${API_URL}/${username}/repos`);
		const [repo1, repo2, repo3] = data;
		console.log(repo1);
		return { repo1, repo2, repo3 };
	} catch (err) {
		createErrorCard("Unable to show the github repositories.");
	}
};
// avatar.src =

form.addEventListener("submit", async function (e) {
	e.preventDefault();

	const user = search.value;

	if (!user) return;

	const userData = await getUser(user);
	if (!userData) return;
	const userRepos = await getUserRepos(user);
	fillUserinfo(userData, userRepos);

	search.value = "";
});

const fillUserinfo = function (userData, userRepos) {
	cardWrapper.innerHTML = `
    <div class="card mx-10">
                    <div>
						<img
							src="${userData.avatar_url}"
							alt=""
							class="avatar" />
					</div>
                    <div class="user-info">
                        <h2>${userData.name}</h2>
						<p>
							${userData.bio}
						</p>

						<ul>
							<li>${userData.followers} <strong>Followers</strong></li>
							<li>${userData.following} <strong>Following</strong></li>
							<li>${userData.public_repos} <strong>Repos</strong></li>
						</ul>

						<div id="repos">
							<a href="${userRepos.repo1.html_url}" class="repo">${userRepos.repo1.name}</a>
							<a href="${userRepos.repo2.html_url}" class="repo">${userRepos.repo2.name}</a>
							<a href="${userRepos.repo3.html_url}" class="repo">${userRepos.repo3.name}</a>
						</div>
                    </div>
    </div>
    `;
};
