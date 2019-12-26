import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SinglePost from './pages/SinglePost'

// Components
import Header from './components/Header'

class App extends React.Component {
	constructor () {
		super()
		this.state = {
			posts: []
		};
	}
	componentWillMount () {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(data => {
			this.setState({posts: data});
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
							<SinglePost />
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
