import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Loading from "../components/Loading"

class SinglePost extends Component {
    constructor () {
        super()
        this.state = {
            post: {}
        }
    }
    componentDidMount(){
        const slug = this.props.match.params.slug;

        console.log(this.props);

        fetch(this.props.apiUrl + "/posts/show-by-slug/" + slug)
        .then(res => res.json())
        .then(data => {
            this.setState({post: data});
            
            document.title = data.name + " - Abdulsamet Şahin"
        })

    }
    render() {

        if (this.state.post.id) {
            return (
                <div id="single-post">
                    <div className="photo">
                        <img 
                            className="hide-mobile"
                            src={JSON.parse(this.state.post.image)[0]}
                            alt={this.state.post.name}
                        ></img>
                        <img 
                            className="show-mobile"
                            src={JSON.parse(this.state.post.image)[1]}
                            alt={this.state.post.name}
                        ></img>
                    </div>
                    <div className="post">
                        <div className="back">
                            <i  
                                onClick={() => this.props.history.goBack()}
                                className="fa fa-long-arrow-left"
                            ></i>
                        </div>
                        <h1 className="title">
                            {this.state.post.name}
                        </h1>
                        <div className="date">
                            {this.state.post.created_at}
                        </div>
    
                        <div className="content" 
                        dangerouslySetInnerHTML={{ __html: this.state.post.body }}>
                        </div>
                    </div>
                </div>
            )
        }
        
        return (
            <div id="single-post">
                <Loading />
            </div>
        )
    }
}

export default withRouter(SinglePost)