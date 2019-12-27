import React, { Component } from 'react'
import pp from "../images/pp.jpg"

export default class Me extends Component {
    
    render() {
        return (
            <div className="me">
                <div className="center2">
                    <div className="photo">
                        <img src={pp} alt="Abdulsamet Şahin"></img>
                    </div>
                    <div className="info">
                        <h1>
                            Merhaba! Ben <span>Abdulsamet</span>
                        </h1>
                        <p>
                            Breakfast procuring no end happiness allowance assurance frank. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me astonished estimating cultivated.
                        </p>
                        <div className="social">
                            <a href="/">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="/">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="/">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="/">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
