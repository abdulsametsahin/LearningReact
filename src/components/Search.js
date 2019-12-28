import React from 'react';
import {useHistory } from 'react-router-dom'

const Search = (props) => {
    const history = useHistory();

    setTimeout(() => {
        const input = document.querySelector('input[type=search]')
        input.focus()

    }, 60);

    const onSubmit = (e) => {
        e.preventDefault();
        const input = document.querySelector('input[type=search]')
        const val = input.value;

        history.push("/search/" + val);
    }

    return (
        <div className="search-bar">
            <form action="/search" onSubmit={onSubmit} className="center2">
                <input type="search" name="q" placeholder="Arama yap" autoComplete="off"/>
                <i onClick={() => {props.toggleSearch()}} className="fa fa-times"></i>
            </form>
        </div>
    );
}

export default Search;
