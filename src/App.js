import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SinglePost from './pages/SinglePost'
import Tag from './pages/Tag'

// Components
import Header from './components/Header'

class App extends React.Component {
	constructor () {
		super()
		this.state = {
			posts: [],
			apiUrl: 'http://localhost:8000'
		};
	}
	componentWillMount () {
		fetch(this.state.apiUrl + '/posts')
		.then(res => res.json())
		.then(data => {
			this.setState(prevState => {
				prevState.posts = data;
				return prevState;
			});
		});
	}
  render () {
		return (
			<Router>
				<div id="app">
					<Header />
					<Switch>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/posts/:slug">
							<SinglePost apiUrl={this.state.apiUrl} />
						</Route>
						<Route exact path="/tag/:tagName">
							<Tag apiUrl={this.state.apiUrl} />
						</Route>
						<Route exact path="/">
							<Home posts={this.state.posts} />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
