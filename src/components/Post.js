import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Post extends Component {
    constructor (props) {
        super()
        this.props = props;
    }
    render() {

        const tags = JSON.parse(this.props.post.tags).map(tag => <Link key={tag} to={"/tag/"+tag}>#{tag}</Link>);

        return (
            <div className="post">
                <div className="photo">
                    <img 
                        src={JSON.parse(this.props.post.image)[1]}
                        alt={this.props.post.name}
                        />
                </div>
                <div className="detail">
                    <div className="tags">
                        {
                            tags
                        }
                    </div>
                    <Link to={"/posts/" + this.props.post.slug}>
                        <h2>
                            {this.props.post.name}
                        </h2>
                        <p>
                            {this.props.post.seo_description}    
                        </p>

                        <span className="read-more">Okumaya devam et</span>
                    </Link>
                </div>
            </div>
        )
    }
}
