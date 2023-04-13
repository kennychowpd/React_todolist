import React, { useState, useEffect } from "react";
import "./App.css";
//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	//States
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);
	//EFFECT
	//RUN ONCE WHEN LOAD
	useEffect(() => {
		getLocalTodos();
	}, []);
	//RUN WHEN TODO ADDED & FILTER CHANGED
	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, filter]);
	//Functions
	const filterHandler = () => {
		switch (filter) {
			case "completed":
				setFilteredTodos(
					todos.filter((todo) => todo.completed === true)
				);
				break;
			case "uncompleted":
				setFilteredTodos(
					todos.filter((todo) => todo.completed !== true)
				);
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};
	//SAVE to LOCALSTORAGE
	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};
	//GET LOCALSTORAGE
	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos"));
			console.log(todoLocal);
			setTodos(todoLocal);
		}
	};
	return (
		<div className="App">
			<header>
				<h1>Kenny's Todo List</h1>
			</header>
			<Form
				todos={todos}
				inputText={inputText}
				setTodos={setTodos}
				setInputText={setInputText}
				setFilter={setFilter}
			/>
			<TodoList
				setTodos={setTodos}
				todos={todos}
				filteredTodos={filteredTodos}
			/>
		</div>
	);
}

export default App;
