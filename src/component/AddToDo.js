import React from 'react';
import '../App.css';

export const AddToDo = ({
	addTodo,
	currentTodoText,
	setCurrentTodoText,
	handleClear,
}) => {
	return (
		<form onSubmit={addTodo}>
			<input
				name='text'
				id='adding'
				className='task'
				type='text'
				value={currentTodoText}
				onChange={(e) => setCurrentTodoText(e.target.value)}
				placeholder='Enter your task'
			/>
			<button id='addTask' type='submit'>
				Add Task
			</button>
			<input onClick={handleClear} type='button' value='Clear Task' />
		</form>
	);
};
