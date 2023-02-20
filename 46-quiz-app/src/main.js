import "./index.css";
import quizData from "./quizData";

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();
	const currentQuizData = quizData()[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	aText.innerText = currentQuizData.a;
	bText.innerText = currentQuizData.b;
	cText.innerText = currentQuizData.c;
	dText.innerText = currentQuizData.d;
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
	let answer;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}

submitBtn.addEventListener("click", () => {
	const answer = getSelected();

	if (answer) {
		console.log(quizData()[currentQuiz].correct);
		if (answer === quizData()[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;

		if (currentQuiz < quizData().length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `
				<h2 class="p-12">
					You answered correctly! at
                    <span class="font-semibold">
                    ${score}/${quizData().length}
                    </span>
				</h2>

                <button onclick="location.reload()">Reload</button>
			`;
		}
	}
});
