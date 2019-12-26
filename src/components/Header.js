import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="center">
                    <div className="logo">
                        asametsahin<span>.dev</span>
                    </div>
                    <div className="menu">
                        <Link to="/">Anasayfa</Link>
                        <Link to="/about">Hakkımda</Link>
                        <Link to="/contact">İletişim</Link>
                        <Link to="" className="search">
                            <i className="fa fa-search"></i>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
