import { render } from 'preact';

import { Link, Route, Router, Switch } from "wouter";
import { Startpage } from './pages/startpage';
import './style.css';
import { Store } from './pages/store';
import { Category } from './pages/category';

export function App() {
	return (
		<Router>
			<Switch>
				<Route path='/store' component={Store}/>
				<Route path='/category' component={Category}/>
				<Route component={Startpage}/>
			</Switch>
		</Router>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

render(<App />, document.getElementById('app'));
