import React, { Component } from 'react'
import Me from '../components/Me'
import Posts from '../components/Posts'

export default class Home extends Component {
    constructor (props) {
        super()
        this.props = props;
    }
    componentDidMount(){
        document.title = "Abdulsamet Şahin"
    }
    render() {

        return (
            <div id="home">
				<Me />
				<Posts posts={this.props.posts}/>
            </div>
        )
    }
}
