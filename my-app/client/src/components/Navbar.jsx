import React from 'react';
import { SearchBar } from './SearchBar';


export function Navbar() {
    return (
        <div className="navbar sticky-top navbar-light bg-light">
            Book Googler
        <SearchBar/>
        </div>
    );
}