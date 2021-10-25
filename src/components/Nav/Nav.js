import React, { Component } from 'react';
import './Nav.scss';
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<div class="topnav">
				<NavLink to="/" activeClassName="active" exact>
					Home
				</NavLink>
				<NavLink to="/todos" activeClassName="active">
					Todos
				</NavLink>
				<NavLink to="/user" activeClassName="active">
					User
				</NavLink>
				{/* <Link className="active" to="/">
					Home
				</Link>

				<Link to="/todos">Todos</Link> */}
			</div>
		);
	}
}

export default Nav;
