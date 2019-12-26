import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Post extends Component {
    constructor (props) {
        super()
        this.props = props;
    }
    render() {
        return (
            <div className="post">
                <div className="photo">
                    <img src="https://storyhub-personal-lite-tarex.redq.now.sh/static/c192e547baa4020498d0c858f4095837/e4ec6/preview.webp"/>
                </div>
                <div className="detail">
                    <div className="tags">
                        <a href="#">
                            #react
                        </a>
                        <a href="#">
                            #js
                        </a>
                        <a href="#">
                            #markdown
                        </a>
                    </div>
                    <Link to="/posts/post-slug">
                        <h2>
                            {this.props.post.title}
                        </h2>
                        <p>
                            Steve Holt! No, I did not kill Kitty. However, I am going to oblige and answer the nice officer’s questions because I am an honest man with no secrets to hide. I don’t criticize you! And if you’re worried about criticism, sometimes a diet is the best defense.
                        </p>

                        <span className="read-more">Read More</span>
                    </Link>
                </div>
            </div>
        )
    }
}
