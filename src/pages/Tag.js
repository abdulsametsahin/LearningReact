import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Loading from "../components/Loading"
import Post from "../components/Post"

class Tag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            tag: ''
        }
    }

    getPosts(tag) {
        document.title = tag + " etiketi ile paylaştıklarım - Abdulsamet Şahin"
        this.setState({posts: [], tag: ''});
        fetch(this.props.apiUrl + "/posts?tag=" + tag)
        .then(res => res.json())
        .then(data => {
            this.setState({posts: data, tag});
        })
    }

    componentDidMount() {
        const tag = this.props.match.params.tagName;
        this.getPosts(tag);
    }
    shouldComponentUpdate(nextProps) {
        if (nextProps.match.params.tagName !== this.props.match.params.tagName) {
            const tag = nextProps.match.params.tagName;
            this.getPosts(tag);
        }
        return true;
    }

    render() {
        const posts = this.state.posts.map(post => <Post key={post.id} post={post}/>);
        
        return (
            <div className="posts">
                <div className="center2">
                    <h1>"{this.props.match.params.tagName}" ETİKETİ İLE PAYLAŞTIKLARIM</h1>

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

export default withRouter(Tag)