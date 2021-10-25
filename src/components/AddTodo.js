import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
		};
	}
	handleOnChangeInput = (e) => {
		this.setState({
			title: e.target.value,
		});
	};
	handleAddTodo = () => {
		if (!this.state.title) {
			alert('Missing input');
			return;
		}
		let todo = {
			id: Math.floor(Math.random() * 1001),
			title: this.state.title,
		};
		this.props.addNewTodo(todo);
		this.setState({
			title: '',
		});
	};
	render() {
		let { title } = this.state;
		return (
			<div>
				<input
					type="text"
					value={title}
					onChange={(e) => this.handleOnChangeInput(e)}
				/>

				<Button outline color="success" onClick={() => this.handleAddTodo()}>
					Add Todo
				</Button>
			</div>
		);
	}
}
