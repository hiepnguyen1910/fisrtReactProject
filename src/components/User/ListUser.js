import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ListUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listUsers: [],
		};
	}
	async componentDidMount() {
		//Cach 1: Dung .then
		// axios.get('https://reqres.in/api/users?page=2').then((res) => {
		// 	console.log('check res: ', res.data.data);
		// });

		// Cach 2:Dung async await
		let res = await axios.get('https://reqres.in/api/users?page=2');
		console.log('check res: ', res.data.data);
		this.setState({
			listUsers: res && res.data && res.data.data ? res.data.data : [],
		});
	}
	showDetailUser = (user) => {
		this.props.history.push(`/user/${user.id}`);
	};
	render() {
		let { listUsers } = this.state;
		console.log('check props: ', this.props);
		return (
			<div className="list-user-container">
				<div className="title">
					<h2>Fetch all list users</h2>
				</div>
				<div className="list-user-content">
					{listUsers &&
						listUsers.length > 0 &&
						listUsers.map((item, index) => {
							return (
								<>
									<div
										className="child"
										key={item.id}
										onClick={() => this.showDetailUser(item)}
									>
										{index + 1} - {item.first_name} {item.last_name}
									</div>
								</>
							);
						})}
				</div>
			</div>
		);
	}
}

export default withRouter(ListUser);
