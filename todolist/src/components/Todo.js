import React from "react";

const Todo = ({ todoText, todo, todos, setTodos }) => {
	//EVENTS
	const deleteHandler = () => {
		setTodos(todos.filter(el => el.id !== todo.id));
	};
	const completeHandler = () => {
		setTodos(
			todos.map(el => {
				if (el.id === todo.id) {
					return {
						...el,
						completed: !el.completed,
					};
				}
				return el;
			})
		);
	};
	return (
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "checked" : ""}`}>{todoText}</li>
			<button onClick={completeHandler} className="check-btn">
				<i className="fas fa-check"></i>
			</button>
			<button onClick={deleteHandler} className="trash-btn">
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
};

export default Todo;
