import React, { Component, Fragment } from 'react';
import AddTodo from './AddTodo';
import { Button } from 'reactstrap';
import { toast } from 'react-toastify';

export default class ListTodo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listTodos: [],
			editTodo: {},
		};
	}
	addNewTodo = (todo) => {
		this.setState({
			listTodos: [...this.state.listTodos, todo],
		});
		toast.success('Wow so easy!');
	};
	handleDeleteTodo = (todo) => {
		let currentList = this.state.listTodos;
		currentList = currentList.filter((item) => item.id !== todo.id);
		this.setState({
			listTodos: currentList,
		});
		toast.success('Delete Successfully');
	};
	handleEditTodo = (todo) => {
		let { editTodo, listTodos } = this.state;
		let isEmptyObj = Object.keys(editTodo).length === 0;
		//Save
		if (isEmptyObj === false && editTodo.id === todo.id) {
			let listTodosCopy = [...listTodos];
			let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);
			listTodosCopy[objIndex].title = editTodo.title;
			this.setState({
				listTodos: listTodosCopy,
				editTodo: {},
			});
			return;
		}
		//Edit
		this.setState({
			editTodo: todo,
		});
	};
	handleOnChange = (e) => {
		let editTodoCopy = { ...this.state.editTodo };
		editTodoCopy.title = e.target.value;
		this.setState({
			editTodo: editTodoCopy,
		});
	};
	render() {
		let { listTodos, editTodo } = this.state;
		let isEmptyObj = Object.keys(editTodo).length === 0;
		return (
			<Fragment>
				<div>Simple TODO APP with React.js</div>
				<AddTodo addNewTodo={this.addNewTodo} /> 	
				<div>
					{listTodos &&
						listTodos.length > 0 &&
						listTodos.map((item, index) => {
							return (
								<div key={item.id}>
									{isEmptyObj === true ? (
										<span>
											{index + 1} - {item.title}{' '}
										</span>
									) : (
										<>
											{editTodo.id === item.id ? (
												<span>
													{index + 1} -{' '}
													<input
														value={editTodo.title}
														onChange={(e) => this.handleOnChange(e)}
													/>
												</span>
											) : (
												<span>
													{index + 1} - {item.title}{' '}
												</span>
											)}
										</>
									)}
									<Button
										outline
										color="warning"
										onClick={() => this.handleEditTodo(item)}
									>
										{isEmptyObj === false && editTodo.id === item.id
											? 'Save'
											: 'Edit'}
									</Button>
									<Button
										outline
										color="danger"
										onClick={() => this.handleDeleteTodo(item)}
									>
										Delete
									</Button>
								</div>
							);
						})}
				</div>
			</Fragment>
		);
	}
}
