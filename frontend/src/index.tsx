import { render } from 'preact';
import { Route, Router, Switch } from "wouter";
import { Category } from './pages/category';
import { Startpage } from './pages/startpage';
import { Store } from './pages/store';
import './style.css';

export function App() {
	return (
		<Router>
			<Switch>
				<Route path='/store' component={Store} />
				<Route path='/category' component={Category} />
				<Route component={Startpage} />
			</Switch>
		</Router>
	);
}

render(<App />, document.getElementById('app'));
