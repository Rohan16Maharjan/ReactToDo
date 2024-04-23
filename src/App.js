import { useEffect, useState } from 'react';
import './App.css';
import { TodoItem } from './component/TodoItem';
import { AddToDo } from './component/AddToDo';
import { EditToDo } from './component/EditToDo';
function App() {
	//to store the todo items item of object
	const [todos, setTodos] = useState([]);

	//to catch the user text
	const [currentTodoText, setCurrentTodoText] = useState('');

	//to see whether user has clicked the edit button or not
	const [editText, setEditText] = useState(false);

	const [selectedTodoId, setSelectedTodoId] = useState(null); // New state to store the ID of the todo item being edited

	// for id
	const [id, setId] = useState(1);

	//get from ls
	useEffect(() => {
		let todoFromLocalStorage = JSON.parse(localStorage.getItem('todos'));
		if (todoFromLocalStorage) {
			setTodos(todoFromLocalStorage);
		} else {
			setTodos([]);
		}
	}, []);

	const addTodo = (e) => {
		e.preventDefault();
		if (currentTodoText === '') {
			alert('Add the Task!!');
			return;
		} else {
			const newTodo = { id: id, Text: currentTodoText };
			const updatedTodo = [...todos, newTodo];
			//save to ls
			setTodos(updatedTodo);
			localStorage.setItem('todos', JSON.stringify(updatedTodo));
			setCurrentTodoText('');
			setId(id + 1);
		}
	};

	// edit
	const handleEdit = (todoItem) => {
		setEditText(true);
		// console.log(todoItem.Text);
		setCurrentTodoText(todoItem.Text);
		setSelectedTodoId(todoItem.id); // Add this state to store the id of the todo item being edited
	};

	const updateToDo = (e) => {
		e.preventDefault();
		if (currentTodoText === '') {
			alert('Task cannot be empty!');
			return;
		}
		const updatedTodos = todos.map((todo) => {
			if (todo.id === selectedTodoId) {
				return { ...todo, Text: currentTodoText };
			}
			return todo;
		});
		setTodos(updatedTodos);
		localStorage.setItem('todos', JSON.stringify(updatedTodos));
		setEditText(false);
		setCurrentTodoText('');
		// setCurrentTodoText();
	};

	// delete
	const handleDelete = (todoItem) => {
		let updatedTask = todos.filter((item) => item.id !== todoItem.id);
		setTodos([...updatedTask]);
		localStorage.setItem('todos', JSON.stringify(updatedTask));
	};

	//clearAll
	const handleClear = () => {
		localStorage.clear();
		setTodos([]);
	};
	return (
		<div className='container'>
			<h2 className='head'>React ToDo</h2>
			{/* create */}
			{!editText && (
				<AddToDo
					addTodo={addTodo}
					currentTodoText={currentTodoText}
					setCurrentTodoText={setCurrentTodoText}
					handleClear={handleClear}
				/>
			)}
			{editText && (
				<EditToDo
					updateToDo={updateToDo}
					currentTodoText={currentTodoText}
					setCurrentTodoText={setCurrentTodoText}
					handleClear={handleClear}
				/>
			)}

			{/* read */}
			<ul className='text' id='text'>
				{todos.map((item) => {
					return (
						<TodoItem
							key={item.id}
							handleDelete={handleDelete}
							handleEdit={() => handleEdit(item)}
							todoItem={item}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
