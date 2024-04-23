import React from 'react';
import '../App.css';

export const EditToDo = ({
	currentTodoText,
	updateToDo,
	setCurrentTodoText,
	handleClear,
}) => {
	return (
		<div>
			<form onSubmit={updateToDo}>
				<input
					name='text'
					type='text'
					id='adding'
					className='tasking'
					value={currentTodoText}
					onChange={(e) => setCurrentTodoText(e.target.value)}
					placeholder='Enter your task'
				/>
				<button id='addTask' type='submit'>
					Edit Task
				</button>
				<input onClick={handleClear} type='button' value='Clear Task' />
			</form>
		</div>
	);
};
