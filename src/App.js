import ListTodo from './components/ListTodo';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListUser from './components/User/ListUser';
import DetailUser from './components/User/DetailUser';

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />

				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/todos">
						<ListTodo />
					</Route>
					<Route path="/user" exact>
						<ListUser />
					</Route>
					<Route path="/user/:id">
						<DetailUser />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
