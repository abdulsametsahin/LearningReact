import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            showSearch: false
        }
        this.toggleSearch = this.toggleSearch.bind(this);
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
    
	toggleSearch () {
		const val = this.state.showSearch;
		this.setState(prevState => {
			prevState.showSearch = !val;
			return prevState;
		});
    }
    
    render() {
        return (
            <>
            <div className="header">
                <div className="center">
                    <div className="logo hide-mobile">
                        asametsahin<span>.dev</span>
                    </div>
                    <div className="menu">
                        <Link to="/">Anasayfa</Link>
                        <Link to="/about">Hakkımda</Link>
                        <Link to="/contact">İletişim</Link>
                        <span className="search" onClick={() => {this.toggleSearch()}}>
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
            {this.state.showSearch && <Search toggleSearch={this.toggleSearch} />}
            </>
        )
    }
}
