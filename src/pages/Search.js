import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Loading from "../components/Loading"
import Post from "../components/Post"

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            query: '',
            noResult: false,
        }
    }

    getPosts (query) {
        document.title = query + " için arama sonuçları - Abdulsamet Şahin"
        this.setState({posts: [], query: ''});
        fetch(this.props.apiUrl + "/posts?q=" + query)
        .then(res => res.json())
        .then(data => {
            this.setState({posts: data, query, noResult: data.length === 0});
        })
    }

    componentWillMount() {
        const tag = this.props.match.params.query;
        console.log(this.props);
        this.getPosts(tag);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.query !== prevProps.match.params.query){
            const tag = this.props.match.params.query;
            this.getPosts(tag);
        }
    }

    render() {
        const posts = this.state.posts.map(post => <Post key={post.id} post={post}/>);
        
        return (
            <div className="posts">
                <div className="center2">
                    <h1>"{this.props.match.params.query}" İÇİN ARAMA SONUÇLARI</h1>

                    {
                        (posts.length > 0) && 
                        <div className="posts-list">
                            {posts}
                        </div>
                    }
                    {
                        (posts.length === 0 && !this.state.noResult) && 
                        <Loading />
                    }
                    {
                        this.state.noResult &&
                        <div className="no-result">// sonuç yok :(</div>
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Search)