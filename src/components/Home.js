import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import Color from './HOC/Color';
import logo from './assets/image/hiep.jpg';
import { connect } from 'react-redux';
// import { rootReducer } from './store/reducers/rootReducer.js';

class Home extends Component {
	componentDidMount() {
		// setTimeout(() => {
		// 	this.props.history.push('/todos');
		// }, 3000);
	}
	render() {
		console.log('check data redux:', this.props.dataRedux);
		console.log('check props: ', this.props);
		let listUsers = this.props.dataRedux;
		return (
			<Fragment>
				<div>Home page</div>
				{/* <img src={logo} /> */}
				<div>
					{listUsers &&
						listUsers.length > 0 &&
						listUsers.map((item, index) => {
							return (
								<>
									<div key={item.id}>
										{index + 1} {item.name}
									</div>
								</>
							);
						})}
				</div>
			</Fragment>
		);
	}
}
const mapStateToProps = (state) => ({
	dataRedux: state.users,
});
// export default withRouter(Home);
export default connect(mapStateToProps)(Color(Home));
