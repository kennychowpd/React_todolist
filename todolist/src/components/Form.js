import React from "react";
import Select from "react-select";

const options = [
	{ value: "all", label: "ALL" },
	{ value: "completed", label: "Completed" },
	{ value: "uncompleted", label: "Uncompleted" },
];

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
		setFilter(e.value);
	};
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
			{/* Default Select */}
			{/* <div className="select">
				<select
					onChange={filterHandler}
					name="todos"
					className="filter-todo"
				>
					<option value="all">ALL</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div> */}
			{/* React-select - better looking */}
			<Select
				onChange={filterHandler}
				name="todos"
				className="filter-todo"
				options={options}
				styles={{
					container: (baseStyles) => ({
						...baseStyles,
						height: "57px",
						marginLeft: "1rem",
						width: "200px",
						border: "none",
					}),
					control: (baseStyles) => ({
						...baseStyles,
						height: "100%",
						borderRadius: "0px",
						border: "none",
					}),
					indicatorsContainer: (baseStyles) => ({
						...baseStyles,
						height: "57px",
						width: "57px",
						backgroundColor: "#ff4a62",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}),
					indicatorSeparator: () => ({
					}),
					menu: (baseStyles) => ({
						...baseStyles,
						margin: "0px",
						border: "none",
						borderRadius: "0px"

					}),
					placeholder: (baseStyles, state) => ({
						...baseStyles,
						color: "black",
						fontFamily: "Poppins",
					}),
					option: (baseStyles, state) => ({
						...baseStyles,
						color: "black",
					}),
				}}
			/>
		</form>
	);
};

export default Form;
