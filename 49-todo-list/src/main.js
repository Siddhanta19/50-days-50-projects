import "./index.css";

const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

let todos = [];

const getTodosFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("todos"));
};

(function renderTodosFromLocalStorage() {
	const todosArrayFromLS = getTodosFromLocalStorage();

	/* todosArrayFromLS exists then go for the code after ? */

	todosArrayFromLS?.forEach((todo) => {
		// inserting the todo b4 the end of the ul.
		// pushing todo through the closing li tag.
		todosUL.insertAdjacentHTML("beforeend", todo);
	});
})();

const storeTodoElInLS = (todo) => {
	// if the todos is not already set, then set todo
	if (!getTodosFromLocalStorage()) {
		// push the todoEl to todos array
		todos.push(todo);

		// set the key value pair with todos arr as the value
		localStorage.setItem("todos", JSON.stringify(todos));

		return;
	}

	// if todos is already stored, then...

	const previousTodos = getTodosFromLocalStorage();

	// add todo to the todos variable and make sure the previous todos are also present.

	todos = [...previousTodos, todo];

	// set the todos key with the value of todos updated
	localStorage.setItem("todos", JSON.stringify(todos));
};

// delete todos on right click
const deleteTodosFromLocalStorage = (deletedTodo) => {
	// pass only those elements into the new array for which the condition is true.

	const filteredTodosFromLocalStorage = getTodosFromLocalStorage().filter(
		// deletedTodo not equals todoFromLS

		(todoFromLS) => deletedTodo.outerHTML !== todoFromLS
	);

	todos = [...filteredTodosFromLocalStorage];

	localStorage.setItem("todos", JSON.stringify(todos));
};

// add Todo when it enter is pressed
const addTodo = () => {
	let todoText = input.value;
	if (!todoText) return;

	// create todoEl with text inside
	const todoEl = document.createElement("li");
	todoEl.innerText = todoText;
	todosUL.appendChild(todoEl);

	// store the todoEl with text
	storeTodoElInLS(todoEl.outerHTML);

	// clear input
	input.value = "";
};

// remember the completed text to local storage

const rememberCompletedTodoInLS = (completedTodo) => {
	console.log(completedTodo);

	// save the html strings from local storage into this todoContainer

	const todoContainer = document.createElement("div");
	todoContainer.innerHTML = getTodosFromLocalStorage().join("");

	const modifiedTodosFromLS = Array.from(
		//using todoContainer.querySelectorAll to select all of the saved html strings as html elements.
		todoContainer.querySelectorAll("li")
	).map((todo) => {
		console.log(todo);
		if (todo.innerText === completedTodo.innerText) {
			const todoText = todo.innerText;
			const todoClass = completedTodo.className;
			console.log(todoClass);
			const completedVersion = `<li class="${todoClass}">${todoText}</li>`;
			return completedVersion;
		} else {
			return todo.outerHTML;
		}
	});

	todos = [...modifiedTodosFromLS];

	localStorage.setItem("todos", JSON.stringify(todos));
};

// =================================================================
// Event Listeners

form.addEventListener("submit", (e) => {
	e.preventDefault();

	addTodo();
});

todosUL.addEventListener("mousedown", (e) => {
	// mark complete on left click
	if (e.button == 0) {
		e.target.closest("li").classList.toggle("completed");
		rememberCompletedTodoInLS(e.target.closest("li"));
	} else if (e.button == 2) {
		// delete on right click
		console.log(e.target.closest("li").outerHTML);
		deleteTodosFromLocalStorage(e.target.closest("li"));
		e.target.closest("li").remove();
	}
});
