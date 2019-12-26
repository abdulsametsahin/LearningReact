import React, { Component } from 'react'
import Post from './Post'

export default class Posts extends Component {
    constructor (props) {
        super()
        this.props = props;
    }
    render() {
        
        const posts = this.props.posts.map(post => <Post post={post}/>);
        
        return (
            <div className="posts">
                <div className="center2">
                    <h1>SON PAYLAŞIMLARIM</h1>

                    <div className="posts-list">
                        {posts}
                    </div>
                </div>
            </div>
        )
    }
}
