import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setFilter }) => {
	//Here I can write JS code and function
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};
	const submitTodoHandler = (e) => {
    //PREVENT PAGE RELOAD
		e.preventDefault();
		setTodos([
			...todos,
			{
				text: inputText,
				completed: false,
				id: Math.trunc(Math.random() * 100000000000),
			},
		]);
    //RESET INPUT
		setInputText("");
	};
	const filterHandler = (e) => {
		setFilter(e.target.value);
	}
	return (
		<form>
			<input
				value={inputText}
				onChange={inputTextHandler}
				type="text"
				className="todo-input"
			/>
			<button
				onClick={submitTodoHandler}
				className="todo-button"
				type="submit"
			>
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select onChange={filterHandler} name="todos" className="filter-todo">
					<option value="all">ALL</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
