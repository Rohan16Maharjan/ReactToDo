import React from 'react';
import '../App.css';

export const TodoItem = ({ todoItem, handleDelete, handleEdit }) => {
	return (
		<li className='list' key={todoItem.id}>
			{todoItem.Text}
			<div>
				<i
					onClick={() => handleEdit(todoItem)}
					className='fa-solid fa-pen-to-square'
				></i>
				&nbsp;
				<i
					id='trash'
					onClick={() => handleDelete(todoItem)}
					className='fa-solid fa-trash'
				></i>
			</div>
		</li>
	);
};
