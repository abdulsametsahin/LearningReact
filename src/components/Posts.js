import React, { Component } from 'react'
import Post from './Post'
import Loading from '../components/Loading'

export default class Posts extends Component {
    constructor (props) {
        super()
        this.props = props;
    }
    render() {
        
        const posts = this.props.posts.map(post => <Post key={post.id} post={post}/>);
        
        return (
            <div className="posts">
                <div className="center2">
                    <h1>SON PAYLAŞIMLARIM</h1>

                    {
                        (posts.length > 0) && 
                        <div className="posts-list">
                            {posts}
                        </div>
                    }
                    {
                        (posts.length === 0) && 
                        <Loading />
                    }
                </div>
            </div>
        )
    }
}
