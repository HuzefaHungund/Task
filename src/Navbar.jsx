import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"

export const Navbar = () => {
    return (
        <div className="nav">
            <Link className="app" to="/">Movies</Link>
            <input  type="text" />
            <Link className="watch" to="/watch">WatchList</Link>
        </div>
    );
};

