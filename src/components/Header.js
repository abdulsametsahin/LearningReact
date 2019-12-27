import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    constructor() {
        super()
        
    }
    componentDidMount () {
        this.$menu = document.querySelector('.header .menu');
        this.$barMenu = document.querySelector('.header .bar-menu');

        document.addEventListener('click', (e) => {
            if (!e.path.includes(this.$menu) && !e.path.includes(this.$barMenu) && this.$barMenu.style.display === "block") {
                this.$menu.style.display = "none";
            }
        });
    }
    showMenu () {
        this.$menu.style.display = "block";
    }
    render() {
        return (
            <div className="header">
                <div className="center">
                    <div className="logo hide-mobile">
                        asametsahin<span>.dev</span>
                    </div>
                    <div className="menu">
                        <Link to="/">Anasayfa</Link>
                        <Link to="/about">Hakkımda</Link>
                        <Link to="/contact">İletişim</Link>
                        <span className="search">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                    <div className="show-mobile bar-menu" onClick={() => this.showMenu()}>
                        <i className="fa fa-bars"></i>
                    </div>
                    <div className="logo show-mobile">
                        asametsahin<span>.dev</span>
                    </div>
                </div>
            </div>
        )
    }
}
