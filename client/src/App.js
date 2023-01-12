import { Route, Switch } from 'react-router-dom';
import Nav from './component/Nav/Nav.jsx';
import Home from './component/Home/Home.jsx';
import Detail from './component/Detail/Detail.jsx';
import Form from './component/Form/Form.jsx';

import './App.css';
import './Normalize.css';
import axios from 'axios';
axios.defaults.baseURL = 'https://dogs-deploy-production.up.railway.app/';

function App() {
	return (
		<>
			<Nav />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/home/:id'>
					<Detail />
				</Route>
				<Route exact path='/newbreed'>
					<Form />
				</Route>
			</Switch>
		</>
	);
}

export default App;
