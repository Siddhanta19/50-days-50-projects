import "./index.css";

const category = "_theme_AoE2_DE.ogg";

const sounds = [
	{ path: `./src/assets/Bengalis${category}`, id: "bengalis" },
	{ path: `./src/assets/Goths${category}`, id: "goths" },
	{ path: `./src/assets/Gurjaras${category}`, id: "gurjaras" },
	{ path: `./src/assets/Indians${category}`, id: "indians" },
	{ path: `./src/assets/Japanese${category}`, id: "japanese" },
];

const soundsContainer = document.querySelector("#app");

const buttonContainer = document.querySelector(".buttons");

const stopAndPlay = function (button) {
	soundsContainer.querySelector(`#${button.innerText}`).pause();

	soundsContainer.querySelector(`#${button.innerText}`).currentTime = 0;
};

buttonContainer.addEventListener("click", (e) => {
	if (!e.target.classList.contains("btn")) return;

	// getting the id of the sound from the button innerText
	const idFromInnerText = e.target.innerText;

	buttonContainer.querySelectorAll(".btn").forEach((button) => {
		stopAndPlay(button);
	});

	soundsContainer.querySelector(`#${idFromInnerText}`).play();
});

sounds.forEach((sound) => {
	// create audio tags with their sources
	const audio = document.createElement("audio");
	audio.src = sound.path;
	audio.id = sound.id;
	soundsContainer.appendChild(audio);

	// create btns mapped to the audio
	const btn = document.createElement("button");
	btn.classList.add("btn");
	btn.innerText = sound.id;

	buttonContainer.appendChild(btn);
});
